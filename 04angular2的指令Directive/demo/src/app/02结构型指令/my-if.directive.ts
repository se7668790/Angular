//导入模块
import { Directive,TemplateRef,ViewContainerRef ,Input  } from '@angular/core';

/*
 * 结构型指令
 * 结构型指令通过添加和删除 DOM 元素来改变DOM的布局。
 * 我们经常看到的内置的结构型指令有：ngIf、ngSwitch、ngFor。
 * 
 * 
 * 为什么要移除而不是隐藏？
 * 我们可以通过设置CSS display 样式为 none 来隐藏元素，元素保留在DOM中只是看不见而已。相反，就用 ngIf。
 * 当我们隐藏一个元素，组件的行为还是继续着，像事件监听、变化检测、子组件的事件监听等依然还会在执手，哪怕我们压根看不见，很明显隐藏这一点来说最大的可能是性能问题；当然他也有好处，那就是当元素想要再一次被显示时，会非常快。
 * 而 ngIf 就不同，设置为 false 时，会释放组件及其子组件的所有资源，并从DOM里移除元素；当然坏处就是，当你很快又需要该元素时，就要重新构建了。
 * 虽然两种方法都有利弊，如果我们确认不使用的元素在短时间内不会再用那么 ngIf 最合理，反之。

 */

@Directive({
  selector: '[appMyIf]'
})


export class MyIfDirective {

  /**
   * 我们需要访问模板，并且还需要一个渲染器来渲染它的内容。
   * 我们通过TemplateRef来访问模板。渲染器是ViewContainerRef。
   * 我们把它们都作为私有变量注入到构造函数中。
   */
  constructor(private templateRef:TemplateRef<any>,private viewContainer: ViewContainerRef) { 
  	
  }

	 /**
   * 如果条件为假，我们就渲染模板，否则就清空元素内容。
   * 我们现在先把appMyIf属性定义成一个“只写”属性。
   */
  @Input() set appMyIf(condition:boolean) {
   
   if (condition) {
    	
      this.viewContainer.createEmbeddedView(this.templateRef);
      
    } 
    else {
    	
      this.viewContainer.clear();
    }
  }

}
