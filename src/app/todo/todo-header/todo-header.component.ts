import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  desc: string = '';

  @Output()
  addEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  addTodo(): void {
    if (this.desc.length > 0) {
      this.addEvent.emit(this.desc);
      this.desc = '';
    }
  }
}
