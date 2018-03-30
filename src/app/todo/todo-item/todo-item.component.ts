import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Todo} from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo = new Todo();

  @Output()
  delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  deleteTodo(id: string): void {
    console.log(`own: ${id}`);
    this.delete.emit(id);
  }
}
