import {Component, Input} from '@angular/core';
import {StatusService} from "../card-status/services/status.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogUpdateTaskComponent} from "../dialog-update-task/dialog-update-task.component";

@Component({
  selector: 'task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input({required: true}) statusId!: string;


  constructor(private statusService: StatusService, public dialog: MatDialog) {
  }

  delete() {
    this.statusService.deleteTask(this.id).subscribe(res => {
      console.log(res)
      window.location.reload()
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogUpdateTaskComponent, {
      width: '250px',
      data: {
        id: this.id,
        title: this.title,
        description: this.description,
        statusId: this.statusId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
