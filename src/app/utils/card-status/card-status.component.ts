import {Component, Input, OnInit} from '@angular/core';
import {TaskDTO} from "../../dto/TaskDTO";
import {tasksData} from "../../data/task";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {StatusService} from "./services/status.service";
import {UpdateTaskDTO} from "../../dto/UpdateTaskDTO";


@Component({
  selector: 'card-status',
  templateUrl: './card-status.component.html',
  styleUrl: './card-status.component.css'
})
export class CardStatusComponent implements OnInit{
  @Input() id!: string;
  @Input() name!: string;
  tasks: TaskDTO[] = []

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.statusService.getTasksByStatus(this.id).subscribe(res => {
      this.tasks = res
    })
  }

  drop(event: CdkDragDrop<TaskDTO[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      const updatedTask: UpdateTaskDTO = {
        id: event.container.data[event.currentIndex].id,
        title: event.container.data[event.currentIndex].title,
        description: event.container.data[event.currentIndex].description,
        statusId: Number(this.id)
      }
      this.statusService.updateTask(updatedTask).subscribe(() => {
      })
    }
  }
}
