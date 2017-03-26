
//我们从 Angaulr Core 中新导入了 Input 模块，这个模块提供一个 @Input 装饰器，通过这个装饰器，使得我们的指令，能够接受外部的输入值，根据不同的输入值表现出不同的能力。 
import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({

	selector: '[appHighlight]'
})

export class HighlightDirective {

	private _domElem: ElementRef;

	private _render: Renderer;

	private _defaultColor = 'red';

	constructor(elem: ElementRef, renderer: Renderer) {

		this._domElem = elem.nativeElement

		this._render = renderer;

		//renderer.setElementStyle(elem.nativeElement, 'backgroundColor', 'red');
	}

	//定义了一个新的属性 highlightColor 并使用了 @Input 装饰器对其进行了装饰，这样一来 @Input 会把相关元数据添加到了类上，让 highlightColor 能被以 myHighlight 为别名进行绑定。
	//被 @Input 装饰器修饰的属性也被称为‘输入属性’。
	@Input('appHighlight') highlightColor: string

	//@HostListener将某个事件绑定到组件
	//参数1:事件
	//参数2:event对象
	@HostListener('mouseenter', ['$event'])
	onMouseEnter() {
		this._render.setElementStyle(this._domElem, 'backgroundColor', this.highlightColor || this._defaultColor);
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this._render.setElementStyle(this._domElem, 'backgroundColor', null);
	}

	//更多事件查看:https://segmentfault.com/a/1190000004071388

}