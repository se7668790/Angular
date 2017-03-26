//引入angular的Component内置组件
import { Component } from '@angular/core';

//引入自定义的数据模型类对象
import {Person} from './app.person'
/*
 * @View metadata decorator has been deprecated in beta.10 release.
 * 即注解@View已经被废弃。
 */

//给组件类添加注解
@Component({

	//设置组件的挂载点
	selector: 'app-root',

	//设置组引用的模板
	templateUrl: './app.component.html',

	//这是组件模板.
	//template:`<p>xxxxxxx</p>`,

	//设置组件的css样式
	//styleUrls: ['./app.component.css']

	//也可以通过styles属性设置
	styles: [
		`section {
			display: inline-block;
			width: 80 % ;
			background-color: lightskyblue;
		}`
	]
})


//导出组件
export class AppComponent {
	
	name:String = 'Angualr2';

	imgUrl:String = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=642710517,1633352972&fm=23&gp=0.jpg';

	aValue:Number = 100;

	myName = 'roy';

	custom = 'xxx';

	isClass = true;

	mySize = {
		w: 800,
		h: 3
	};

	myClick(e) {

		alert('clicked!!!')

		alert(e.target.nodeName)
	};
	myKeyUp(){
		
		alert('xxxxxxxxxxx')
	}
	
	user = {
		email:'18538578306@163.com'
	};
	
	books = ['HTML5','CSS3','JavaScript','Angular'];
	
	persons = [new Person('roy',28),new Person('tom',30),new Person('jobs',58)];
	
	isShow:Boolean = true;
	
	myToggle(){
		
		this.isShow = !this.isShow
	};
	
	private status:string = 'ready';
	
	
	
}















