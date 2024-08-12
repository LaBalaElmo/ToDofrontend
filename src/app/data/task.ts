import {TaskDTO} from "../dto/TaskDTO";

export const tasksData: {[key: string]: TaskDTO[]} = {
  "1": [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      status: {
        id: 1,
        name: 'Pending'
      }
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
      status: {
        id: 2,
        name: 'In Progress'
      }
    }
  ],
  "2":[
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 1',
      status: {
        id: 1,
        name: 'Pending'
      }
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'Description 2',
      status: {
        id: 2,
        name: 'In Progress'
      }
    }
  ],
  "3":[
    {
      id: 5,
      title: 'Task 5',
      description: 'Description 1',
      status: {
        id: 1,
        name: 'Pending'
      }
    },
    {
      id: 6,
      title: 'Task 6',
      description: 'Description 2',
      status: {
        id: 2,
        name: 'In Progress'
      }
    }
  ]
}
