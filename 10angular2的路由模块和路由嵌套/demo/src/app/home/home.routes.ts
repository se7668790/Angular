import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

export const RouterConfig: Routes = [

  {
    path: '', 
    
    component: HomeComponent,
    
    //使用children定义子路由
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      
      { path: 'detail/:id', component: DetailComponent },
      
      { path: 'list', component: ListComponent },

    ]
  }


];