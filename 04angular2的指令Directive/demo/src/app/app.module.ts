import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//引入自定义指令
import { RoyDirective } from './01属性型指令/01自定义属性指令的基本用法/roy.directive';
import { TestDirective } from './01属性型指令/02自定义属性指令访问DOM/test.directive';
import { HighlightDirective } from './01属性型指令/03自定义属性指令并使用Input/highlight.directive';
import { MyIfDirective } from './02结构型指令/my-if.directive';

//这个Angular模块中显示的声明我们自己定义的指令，以便Angualr在解析模板时，能够正确的识别我们自己定一个指令。 
@NgModule({
  declarations: [
    AppComponent,
    RoyDirective,
    TestDirective,
    HighlightDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
