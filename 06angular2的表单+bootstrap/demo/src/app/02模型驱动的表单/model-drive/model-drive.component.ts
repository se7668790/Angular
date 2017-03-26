import { Component, OnInit } from '@angular/core';

//引入相关的模块
import { NgForm,Validators,FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
	selector: 'model-drive',
	templateUrl: './model-drive.component.html',
	styleUrls: ['./model-drive.component.css']
})

export class ModelDriveComponent implements OnInit {
	
	//new FormControl()用来构建一个表单的控制对象,该对象主要是用来对某一个表单元素的数据进行控制和验证.
	//参数1:默认值
	//参数2:验证的配置信息
	//具体用法参考官方文档:https://angular.io/docs/ts/latest/api/forms/index/FormControl-class.html
	
	username = new FormControl('', [
	
		Validators.required,
		
		Validators.minLength(5)
		
	]);
	
	password = new FormControl('', [Validators.required]);
	
	//使用FormBuilder是一种更灵活和通用的方式来配置表单。FormBuilder是一个名副其实的助手类,帮助我们构建表单。你可以认为它是一个“工厂”对象。
	//可以使用new FormBuilder()构建表单,也可以直接使用this.builder获取.
	
	//FormGroup是一个表单组,包含表单内的所有数据.可以直接使用表单组对象获取表单的数据:aformGroup.value
	loginForm: FormGroup = this.builder.group({
		
		username: this.username,
		
		password: this.password
		
	});

	constructor(private builder: FormBuilder) {}

	login() {
		console.log(this.loginForm.value);
		// Attempt Logging in...
	}

	ngOnInit() {

	}

}