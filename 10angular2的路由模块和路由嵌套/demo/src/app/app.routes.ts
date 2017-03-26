
/*
 *在一些实例中，是在app.routes.ts文件中定义路由模块：
 * 
然后在AppModule中的imports中直接引入这个AppRoutingModule。

这两种方式其实都是一样，只不过就是RouterModule.forRoot(...)这部分是在哪儿定义的问题。

但是，如果我们要定义子模块和子模块路由，就需要使用AppRoutingModule的方式。在你的开发中，也建议使用路由模块的定义方式。
*/
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingComponent } from './setting/setting.component';
//引入home模块
import { HomeModule } from './home/home.module';


@NgModule({
  imports: [
    RouterModule.forRoot([
    {
    
        path: '',
     
        //redirectTo: '/home',
        
        //设置默认打开list
        redirectTo: '/home/list',
        
        pathMatch: 'full'
    },
    {
        path: 'home',
        
        //加载子路由模块
        loadChildren:'./home/home.module#HomeModule'
    },
    {
        path: 'about',
        component:AboutComponent
    },
     {
        path: 'setting',
        component: SettingComponent
    }
    ])
  ],
  
  exports: [
  
    RouterModule
  ]
})

export class AppRoutingModule {}