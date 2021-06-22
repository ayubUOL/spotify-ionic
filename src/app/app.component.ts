import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';

import { ApiService } from "../app/services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private apiService: ApiService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.loadOAuth();
    });
  }

  loadOAuth(){
    this.apiService.getOAuth().subscribe((res: any) => {
      console.log("Get OAuth -> ", res.access_token)
      this.apiService.auth_token = res.access_token;
    },(err) => {

    });
  }
}
