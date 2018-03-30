import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { TodoComponent } from './todo.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  }
];
export const TodoRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
