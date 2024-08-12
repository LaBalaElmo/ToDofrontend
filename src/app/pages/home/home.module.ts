import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {UtilsModule} from "../../utils/utils.module";



@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DragDropModule,
    UtilsModule
  ]
})
export class HomeModule {

}
