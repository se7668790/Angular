//引入angular的Component内置组件
import { Component } from '@angular/core';

/*
 * 组件是一个模板的控制类用于处理应用和逻辑页面的视图部分。
 * 
 * 组件是构成 Angular2 应用的基础和核心，可用于整个应用程序中。(注意：系统架构仅包括Angular 2核心。可选的路由、HTTP服务未包括在内。)
 * 
 * 组件知道如何渲染自己及配置依赖注入。
 * 组件通过一些由属性和方法组成的 API 与视图交互。
 * 
 * 
 * 
 * 创建 Angular 组件的方法有三步： 
 * 从 @angular/core 中引入 Component 修饰器
 * 建立一个普通的类，并用 @Component 修饰它
 * 在 @Component 中，设置 selector 自定义标签，以及 template 模板和styles样式等。
 * 
 * 
 * @Component 中的配置项说明：
 * selector - 一个 css 选择器，它告诉 Angular 在 父级 HTML 中寻找一个 <mylist> 标签，然后创建该组件，并插入此标签中。
 * templateUrl - 组件 HTML 模板的地址。
 * directives - 一个数组，包含 此 模板需要依赖的组件或指令。
 * providers - 一个数组，包含组件所依赖的服务所需要的依赖注入提供者。
 * 
 * 
 * 
 * 另外需要注意：@View metadata decorator has been deprecated in beta.10 release.
 * 即注解@View已经被废弃。
 * 
 * 
 * 
 * 使用命令: 
 * ng generate component <path + component> 或是 ng g component <path + component>
 * 用来快速生成组件。
 * 
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
		`h1{
			color: #333;
			font-weight: lighter;
		}`
	]
})

//定义并且导出组件类
export class AppComponent {
	
	//设置组件模板中绑定的变量
  title = 'app works!';
}
