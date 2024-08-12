import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { SideMenuComponent } from './main-layout/components/side-menu/side-menu.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from "./main-layout/components/header/header.component";
import {UtilsModule} from "../utils/utils.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {DialogTaskComponent} from "./main-layout/components/dialog-task/dialog-task.component";
import { DialogStatusComponent } from './main-layout/components/dialog-status/dialog-status.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    LandingLayoutComponent,
    HeaderComponent,
    SideMenuComponent,
    DialogTaskComponent,
    DialogStatusComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    UtilsModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
