import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app works!';

	user = {
		id: 110,
		name: 'roy'
	}

	id: number;

	private sub: any;

	

	home() {

		this.router.navigate(['/home', '111']);
	}

	about() {

		this.router.navigate(['/about']);
	}

	setting() {

		this.router.navigate(['/setting']);
	}

	//使用Router对象可以调用navigate()方法进行路由导航
	constructor( 
		private route: ActivatedRoute,
  	private router: Router
  	
	) {

		this.router = router
		
		this.route = route
	}

	ngOnInit() {
		 
	}

}