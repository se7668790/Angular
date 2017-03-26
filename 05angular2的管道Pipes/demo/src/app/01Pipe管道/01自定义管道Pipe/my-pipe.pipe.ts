import { Pipe, PipeTransform } from '@angular/core';


/*
 * 应用程序中重复着相同的转换非常多，事实上，我们想将这些转换直接在HTML模板里应用。这一过程叫做管道（pipe）。
 * 
 * 本人理解管道其实和angular1版本中的过滤器或是artTemplate中的外部辅助函数一样，都是对渲染到模板中的数据起到过滤/格式化的作用。
 * 
 * Angular自带一堆管道，比如：DatePipe、UpperCasePipe、LowerCasePipe、CurrencyPipe、PercentPipe，他们都可以在任何模板中使用；另外还可以通过API Reference(https://angular.io/docs/ts/latest/api/#!?apiFilter=pipe) 查看所有内置的管道。
 * 
 * 可以使用ng generate Pipe <path + name> 或是  ng g Pipe <path + name>
 */

//管道是一个使用管道元数据装饰的类。
//@Pipe 装饰器有一个 name 属性，用来指定管道名称。名称必须是有效的JavaScript标识符，这里叫 myPipe。

@Pipe({
  name: 'myPipe'
})


//我们通过 @Pipe 装饰器来告诉Angular这是一个管道类，所以还需要从Angular库中加载它。
//Pipe类必须实现 PipeTransform 接口 

//接下来我们自定义 一个计算次幂的管道


export class MyPipePipe implements PipeTransform {

	//transform 方法，方法接收一个输入参数，和若干可选参数，最后返回转换后的值。管道的 transform 方法有一个可选参数 exponent。
	
  transform(value: number, exponent?: string): any {
  	
  	alert('嘿嘿')
  	let exp = parseFloat(exponent);
  	
    return Math.pow(value, isNaN(exp) ? 1 : exp);
    
    
  }

}
