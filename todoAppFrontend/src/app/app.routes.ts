import {  RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  
    {
        path:'todos',
        component:TodosComponent
    }
];


@NgModule({
    imports:[RouterModule.forRoot(routes),HttpClientModule],
    exports:[RouterModule]
})
export class Approutes{}
