import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: Todo[] = [];
  
  @Output()
  deleteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteTodo(id: string): void {
    console.log(`list`);
    this.deleteEvent.emit(id);
  }
}
