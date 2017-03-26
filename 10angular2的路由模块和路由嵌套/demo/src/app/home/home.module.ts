import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { RouterConfig } from './home.routes'

//路由嵌套需要引入@angular/common模块，并在该模块设置依赖
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  
 imports: [
  CommonModule,
  RouterModule.forChild(RouterConfig)
 ],
 
 declarations: [HomeComponent, ListComponent, DetailComponent],
 
 exports: [HomeComponent],
 
 bootstrap: []
  
})
export class HomeModule { }
