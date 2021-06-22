import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  constructor(public popCtrl: PopoverController) {}
  closePopOver(data) {
    this.popCtrl.dismiss(data);
  }
  ngOnInit() {}
}
