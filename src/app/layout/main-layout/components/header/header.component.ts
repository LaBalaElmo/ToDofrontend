import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {StateSideMenu} from "../../../../redux/home.reducer";
import {Store} from "@ngrx/store";
import {changeStateSidePanel} from "../../../../redux/home.actions";
import {MatDialog} from "@angular/material/dialog";
import {DialogTaskComponent} from "../dialog-task/dialog-task.component";
import {DialogStatusComponent} from "../dialog-status/dialog-status.component";

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sideMenu: Observable<StateSideMenu>

  constructor(private store: Store<{sideMenu: StateSideMenu}>, public dialog: MatDialog) {
    this.sideMenu = store.select('sideMenu')
  }

  changeStateSidePanel() {
    this.store.dispatch(changeStateSidePanel())
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogTaskComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogStatus() {
    const dialogRef = this.dialog.open(DialogStatusComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
