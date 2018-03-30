import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TodoModule { }
