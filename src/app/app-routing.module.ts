import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoRoutingModule } from './todo/todo-routing.module';

const routes: Routes = [{
    path: 'baidu',
    redirectTo: 'www.baidu.com',
    pathMatch: 'full'
}];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        TodoRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class APPRoutingModule {}
