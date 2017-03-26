import { Component, OnInit } from '@angular/core';

import { NgForm ,NgControl} from '@angular/forms';

@Component({
  selector: 'template-drive',
  templateUrl: './template-drive.component.html',
  styleUrls: ['./template-drive.component.css'],
  
})


export class TemplateDriveComponent implements OnInit {
	
	user = {
		name:'roy',
		psw:'123456',
		address:{
			country:'中国'
		}
	}
	
	//提交事件,传递form对象
	 SignUp(form: NgForm) {
	 	
	 	//使用form.value可以直接获取到表单的数据对象
    console.log(form.value);
    // {email: '...', password: '...'}
   
  }
	
  constructor() { }

  ngOnInit() {
  }

}
