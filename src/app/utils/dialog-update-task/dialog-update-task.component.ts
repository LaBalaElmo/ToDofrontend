import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UpdateTaskDTO} from "../../dto/UpdateTaskDTO";
import {StatusService} from "../card-status/services/status.service";

@Component({
  selector: 'app-dialog-update-task',
  templateUrl: './dialog-update-task.component.html',
  styleUrl: './dialog-update-task.component.css'
})
export class DialogUpdateTaskComponent {
  createTaskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private statusService: StatusService,
              public dialogRef: MatDialogRef<DialogUpdateTaskComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UpdateTaskDTO) {

    this.createTaskForm.setValue({
      title: data.title,
      description: data.description
    })
  }

  onSubmit() {
    this.statusService.updateTask({
      id: this.data.id,
      description: this.createTaskForm.value.description!,
      title: this.createTaskForm.value.title!,
      statusId: this.data.statusId
    }).subscribe(() => {
      window.location.reload();
    });
    this.dialogRef.close();
  }
}
