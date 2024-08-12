import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {StateSideMenu} from "../../redux/home.reducer";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  sideMenu: Observable<StateSideMenu>


  constructor(store: Store<{sideMenu: StateSideMenu}>) {
    this.sideMenu = store.select('sideMenu')
  }
}
