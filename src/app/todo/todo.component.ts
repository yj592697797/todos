import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { 
    this.getAll();
  }

  ngOnInit() {
    
  }

  add(event): void {
    this.todoService.add(event)
      .then(todo => {
        this.todos = [...this.todos, todo];
      });
  }

  getAll(): void{
    this.todoService.getAll()
      .subscribe({
        next: todos => this.todos = [...todos]
      });
      // .then(todos => this.todos = [...todos]);
  }

  delete(id: string): void {
    console.log(`todo`);
    this.todoService.delete(id)
      .then(() => {
        this.getAll();
      });
  }
}
