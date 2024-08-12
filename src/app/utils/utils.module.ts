import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskCardComponent} from "./task-card/task-card.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CardStatusComponent} from "./card-status/card-status.component";
import {MatButtonModule} from "@angular/material/button";
import { DialogUpdateTaskComponent } from './dialog-update-task/dialog-update-task.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";


@NgModule({
  declarations: [
    TaskCardComponent,
    CardStatusComponent,
    DialogUpdateTaskComponent
  ],
  exports: [
    TaskCardComponent,
    CardStatusComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    FormsModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ]
})
export class UtilsModule { }
