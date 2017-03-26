import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoyComponent } from './roy/roy.component';
/*
 * Angular的Module模块的目的是用来组织app的逻辑结构。ng2甚至支持异步预加载，即后台预加载懒加载的模块，这样当懒加载模块需要被加载时其实其已经加载完成了，又加快了响应速度。

	在ng中使用@NgModule修饰的class就被认为是一个ng module。NgModule可以管理模块内部的Components、Directives、Pipes，引入Service，并控制外部组件对内部成员的访问权限。

	angular2 具有了模块的概念，响应了后台程序的号召，高内聚 低耦合。模块由一块代码组成，可用于执行一个简单的任务。模块就是用来进行封装，进行高内聚  低耦合的功能。
	
 
	Angular 模块是一个带有 @NgModule 装饰器的类，它接收一个用来描述模块属性的元数据对象。
	每个 Angular 应该至少要有一个模块(根模块)，一般可以命名为：AppModule。
	
	简单说明一下模块元数据中各个参数的用途。

		imports：导入其他模块，就是要使用其他模块的功能，必须要导入。

		declarations：声明，声明本模块包含的内容。可能有些同学会遇到，定义了一个指令，在component中使用却总是没有生效的问题，首先我们要检查的就是是否进行了声明。

		exports：外部可见的内容。相当于.net中声明为public的那些类。

		providers：服务提供者，主要用来定义服务。估计ng2框架会自动将注册的服务体检到依赖注入实例中，目前测试也是如此。

		bootstrap：启动模块。只在根模块使用。在除了根模块以外的其他模块不能使用。启动模块为根模块，自定义的其他模块叫特性模块。
		一个ng2应用至少要有一个根模块，包含ng2自带的BrowserModule，并声明为引导模块，在应用启动时将从此模块展开。
 */
@NgModule({
	
	//声明该模块包含的内容.比如 :组件 、 指令 等
  declarations: [
    AppComponent,
    RoyComponent
  ],
  
  //本模块依赖的其他模块
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  
  //定义该模块依赖的服务.
  providers: [],
  
  //启动模块.只在根模块使用.
  bootstrap: [AppComponent]
})

//导出模块类
export class AppModule { }

/*
 * ng2模块的目录和目录结构的最佳实践：
 1.每个模块一个单独的文件夹
 2.模块是高内聚 低耦合
 3.模块内功能相关或相近
 4.每个模块都有单独的路由定义 -不是必须
 5.不要重复导入一些模块，必要的时候加入限制。 因为重复导入可能会影响依赖注入实例
 */