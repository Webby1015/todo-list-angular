import { Component } from '@angular/core';
import { Todo } from 'src/app/Userdata/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      new Todo(1, 'Task 1', 'Description 1', true),
      new Todo(2, 'Task 2', 'Description 2', false),
      // Add more Todo objects as needed
    ];
  }
  onclick=(item:Todo)=>{console.log(item)}
}
