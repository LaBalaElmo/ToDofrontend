import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StatusService} from "../../../../utils/card-status/services/status.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-status',
  templateUrl: './dialog-status.component.html',
  styleUrl: './dialog-status.component.css'
})
export class DialogStatusComponent {
  createStatusForm = new FormGroup({
    name: new FormControl('')
  })

  constructor(private statusService: StatusService,
              public dialogRef: MatDialogRef<DialogStatusComponent>) {
  }

  onSubmit() {
    this.statusService.createStatus(this.createStatusForm.value.name!).subscribe(res => {
      this.statusService.connectToStatus(res.id.toString()).subscribe(() => {});
      window.location.reload();
    });
    this.dialogRef.close();
  }
}
