//引入指令模块以及其他模块
import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

//import { Test } from './test'

@Directive({

	selector: '[appTest]'
})

export class TestDirective {

	private _domElem: ElementRef;

	private _render: Renderer;

	constructor(elem: ElementRef, renderer: Renderer) {

		this._domElem = elem.nativeElement

		this._render = renderer;

		//renderer.setElementStyle(elem.nativeElement, 'backgroundColor', 'red');
	}

	//@HostListener将某个事件绑定到组件
	//参数1:事件
	//参数2:event对象
	@HostListener('mouseenter', ['$event'])
	onMouseEnter(e) {

		this._render.setElementStyle(this._domElem, 'color', 'red');
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this._render.setElementStyle(this._domElem, 'color', null);
	}

	//更多事件查看:https://segmentfault.com/a/1190000004071388

}