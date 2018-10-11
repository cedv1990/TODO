import { Component, OnInit } from '@angular/core';
import { Task, State } from '../task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  tasks: Task[] = [
    {
      id: 1,
      name: 'Task 1',
      description: 'The task 1',
      date: new Date(),
      state: State.TODO,
      uid: 'pipe'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'The task 2',
      date: new Date(),
      state: State.TODO,
      uid: 'pipe'
    },
    {
      id: 3,
      name: 'Task 3',
      description: 'The task 3',
      date: new Date(),
      state: State.TODO,
      uid: 'pipe'
    },
    {
      id: 4,
      name: 'Task 4',
      description: 'The task 4',
      date: new Date(),
      state: State.TODO,
      uid: 'pipe'
    },
    {
      id: 5,
      name: 'Task 5',
      description: 'The task 5',
      date: new Date(),
      state: State.TODO,
      uid: 'pipe'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
