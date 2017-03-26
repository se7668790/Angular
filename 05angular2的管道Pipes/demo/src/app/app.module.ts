import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyPipePipe } from './01Pipe管道/01自定义管道Pipe/my-pipe.pipe';
import { PurPipe } from './01Pipe管道/02Pure和Impure管道/pur.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    PurPipe
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
