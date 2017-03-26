import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//使用angular2的表单需要引入FormsModule
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//使用angular2的响应/模型驱动的form需要引入ReactiveFormsModule模块。切记！！！！
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDriveComponent } from './01模板驱动的表单/template-drive/template-drive.component';
import { ModelDriveComponent } from './02模型驱动的表单/model-drive/model-drive.component';




@NgModule({
  declarations: [
    AppComponent,
   
    TemplateDriveComponent,
    ModelDriveComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
