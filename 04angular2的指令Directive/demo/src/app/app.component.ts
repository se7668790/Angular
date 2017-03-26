import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	private isShow:boolean;
	
  title = 'app works!';
  
  //private status:string = 'ready';
  
  myClick(){
  	
  	this.isShow = !this.isShow
  }
}
