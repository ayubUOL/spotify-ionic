import { FilterComponent } from "./../filter/filter.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DashboardPageRoutingModule } from "./dashboard-routing.module";

import { DashboardPage } from "./dashboard.page";

import { SharedModule } from "../shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    DashboardPageRoutingModule,
    SharedModule,
  ],
  declarations: [DashboardPage, FilterComponent],

  entryComponents: [FilterComponent],
})
export class DashboardPageModule {}
