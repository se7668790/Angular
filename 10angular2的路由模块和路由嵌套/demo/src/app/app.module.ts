import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//我们先引入了Angular2的路由模块RouterModule，然后在下面的imports里面，通过RouterModule.forRoot(routes)用路由模块引用之前定义的路由设置。
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

//引入路由模块
import { AppRoutingModule } from './app.routes';

import { AboutComponent } from './about/about.component';
import { SettingComponent } from './setting/setting.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SettingComponent,
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    //设置依赖的根路由模块.不用再设置 RouterModule.forRoot(routes).因为表达的都是一个意思.
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
