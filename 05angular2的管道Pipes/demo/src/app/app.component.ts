import { Component } from '@angular/core';

//导入自定义管道
import { MyPipePipe } from './01Pipe管道/01自定义管道Pipe/my-pipe.pipe';

//impure异步管道需要引入Observable
import { Observable } from 'rxjs/Rx';

//DatePipe 是Angular内置管道，存放在 angular/common 库里面。
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	
	//注意:在老的版本里要在pipes 数组里列出我们的管道.但在新的版本里边这样做会报错!坑爹啊!有木有!!!!
	//pipes: [MyPipePipe]
})
export class AppComponent {
	title = 'app works!';

	private birth = new Date(1989, 3, 25)

	//动态切换shortDate/fullDate管道
	private toggle: boolean = true; // start with true == shortDate

	get format() { return this.toggle ? 'shortDate' : 'fullDate' }
	
	toggleFormat() { this.toggle = !this.toggle; }
	
	//自定义管道
	power = 5;
  factor = 1;
  
  
  //如果我们想在某个组件类调用管道，可以先加载相应模块，然后按类实例调用 transform 方法即可。
  
  //year = new DatePipe().transform(new Date(1988,3,15), 'y');
  
 
	
}