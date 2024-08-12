import { Component } from '@angular/core';
import {StatusDTO} from "../../dto/StatusDTO";
import {HomeService} from "./service/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  statuses: StatusDTO[] = [];

  constructor(private homeService: HomeService) {
    homeService.getAllStatuses().subscribe(res => {
      console.log(res)
      this.statuses = res;
    })
  }
}
