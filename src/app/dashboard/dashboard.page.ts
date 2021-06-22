import { FilterComponent } from "./../filter/filter.component";
import { ApiService } from "./../services/api.service";
// dashboard.page.ts
import { Component, OnInit } from "@angular/core";
import {
  NavController,
  PopoverController,
  AlertController,
} from "@ionic/angular";
import { AuthenticateService } from "../services/authentication.service";
import { RestApiService } from "../rest-api.service";
import { SortPipe } from "../sort.pipe";
import { SearchPipe } from "../search.pipe";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  userEmail: string;
  isLoading: boolean;
  repos = [];
  errorMessage: string;
  descending: boolean = false;
  order: number;
  column: string = "name";

  collapsed = [];

  constructor(
    private apiService: ApiService,
    private navCtrl: NavController,
    private authService: AuthenticateService,
    public popoverController: PopoverController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.authService.userDetails().subscribe(
      (res) => {
        console.log("res", res);
        if (res !== null) {
          this.userEmail = res.email;
        } else {
          this.navCtrl.navigateBack("");
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
    this.loadCountries();
  }

  loadCountries() {
    this.isLoading = true;
    this.apiService.getTrendingRepos().subscribe(
      (res: any) => {
        this.isLoading = false;
        this.repos = res.tracks.items;
        console.log(res);
      },
      (err) => {
        this.isLoading = false;
        this.presentNoInternetAlert();
      }
    );
  }

  doRefresh(event) {
    this.apiService.getTrendingRepos().subscribe(
      (res: any) => {
        this.repos = res;
        event.target.complete();
      },
      (err) => {
        event.target.complete();
      }
    );
  }

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  logout() {
    this.authService
      .logoutUser()
      .then((res) => {
        console.log(res);
        this.navCtrl.navigateBack("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FilterComponent,
      cssClass: "my-custom-class",
      event: ev,
      translucent: true,
    });
    await popover.present();

    await popover.onDidDismiss().then((data) => {
      if (data.data) {
        switch (data.data) {
          case "name":
            this.repos.sort((a, b) =>
              a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            );
            break;
          case "stars":
            this.repos.sort(
              (a, b) => parseFloat(b.stars) - parseFloat(a.stars)
            );

            break;
        }
      }
      console.log(data);
    });
  }

  async presentNoInternetAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Something went wrong!",
      message: "An alien is probably blocking your signal",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Try again",
          handler: () => {
            this.loadCountries();
          },
        },
      ],
    });

    await alert.present();
  }
}
