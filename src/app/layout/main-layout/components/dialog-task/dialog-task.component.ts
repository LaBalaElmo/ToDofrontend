import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {StatusService} from "../../../../utils/card-status/services/status.service";

@Component({
  selector: 'app-dialog-task',
  templateUrl: './dialog-task.component.html',
  styleUrl: './dialog-task.component.css'
})
export class DialogTaskComponent {
  createTaskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private statusService: StatusService,
              public dialogRef: MatDialogRef<DialogTaskComponent>) {
  }

  onSubmit() {
    this.statusService.createTask({
      statusId: 1,
      description: this.createTaskForm.value.description!,
      title: this.createTaskForm.value.title!
    }).subscribe(() => {
      window.location.reload();
    });
    this.dialogRef.close();
  }
}
