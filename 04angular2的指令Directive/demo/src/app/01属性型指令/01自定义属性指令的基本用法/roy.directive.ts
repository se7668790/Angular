
//导入指令模块以及相关模块
import { Directive,ElementRef, Renderer } from '@angular/core';

/*
 * Angular模板是动态的 。当 Angular 渲染它们时，它会根据指令对 DOM 进行修改。
 * 
 * 指令是一个带有"指令元数据"的类。在 TypeScript 中，要通过 @Directive 装饰器把元数据附加到类上。
 * 
 * 在Angular中包含以下三种类型的指令：
 * 
 * 属性指令：以元素的属性形式来使用的指令。使用@Directive() - 不会改变DOM，但是会添加额外的行为.属性型指令会修改元素的外观或者行为。 e.g. NgStyle可以修改元素的好几个样式。
 * 
 * 结构指令：通过添加和删除 DOM 元素来改变DOM的布局。.使用@Directive() - 通常会改变一个元素的DOM － 例如ngIf、ngSwitch、ngFor.
 * 
 * 组件：作为指令的一个重要子类，组件本质上可以看作是一个带有模板的指令。
 * 
 * 
 * 推荐命令创建自定义指令:
 * 
 * ng generate directive <path + myname> 或是 ng g directive <path + myname>
 */

//@Directive对RoyDirective指令类进行修饰
@Directive({
	
	//属性型指令的@Directive装饰器需要一个css选择器来指定selector的值，以便Angular编译器从模版中识别出关联到这个指令的HTML。例如：代码中的‘［］’对应的就是css选择器中的属性选择器。
	//需要注意的是：属性型指令的 selector 必须要对应 CSS 的属性选择器，同时命名需要遵循驼峰式命名方式
  selector: '[appRoy]'
})

//导出指令类,这样才能够让我们定义的指令被别的指令（组件）访问。
export class RoyDirective {
	
	//类的构造函数中注入 ElementRef 和 Renderer 模块的实例.
	//依赖注入稍后研究...
	//注入 ElementRef 的目的在于让指令可以引用到真实的 DOM 元素。ElementRef这个类可以用来在宿主标签内注入其它标签的应用，这些应用并不仅仅局限于 DOM 元素。
	//Renderer 可以让我们在 Hightlight 类里面的逻辑代码能够正确的渲染 DOM 元素的样式.

  constructor(ele:ElementRef,renderer:Renderer) { 
  	
  	
  	renderer.setElementStyle(ele.nativeElement,'color','red');
  	
  	renderer.setElementStyle(ele.nativeElement,'fontSize','3rem');
  }

}



















