import { Pipe, PipeTransform } from '@angular/core';

/*
 * 管道有两种类型：pure 和 impure，其中pure是默认类型，我们可以在管道元数据里指定 pure:false 表明管道是 impure 类型。
 * 
 * 1、Pure管道
 * Angular只会检测到输入值变更才会执行pure管道。pure变更指的是原始输入值的变化（String、Number、Boolean、Symbol）或对象引用的变化（Date、Array、Function、Object`）。
 * 
 * Angular会忽略对象内部的变化，一个对象引用检查要比一个深差异检查要快得多，这样Angular才能快速判断它是否可以跳过管道或屏幕更新。正因为有对象引用的受限，所以我们需要另一种管道的变化检测策略 impure 管道。
 * 
 * 2、Impure管道
 * 
 * Angular每次组件变化检测周期时都会执行 impure 管道，每个按钮或鼠标移动时都会执行管道。所以实施一个 impure 管道要很注意了，因为管道执行不足够快，有可能会让用户体验变得很差。
 * 
 * 
 * 简单直接来讲就是：pure管道只会当给管道输入的值变化时才会执行。而inpure管道会在每一次页面有变化的时候就触发。
 */
@Pipe({
	
  name: 'pur',
  
  //impure管道只是在pipe元数据增加一个 pure:false
  pure:false
})
export class PurPipe implements PipeTransform {

 	
  transform(value: number, exponent?: string): any {
  	
  	let exp = parseFloat(exponent);
  	alert('我艹!!!!')
    return Math.pow(value, isNaN(exp) ? 1 : exp);
    
    
  }

}
