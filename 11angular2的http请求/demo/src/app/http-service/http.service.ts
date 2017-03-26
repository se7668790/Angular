import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
	//体力不支,未完待续!!!!!!!!
	getRequest() {
		let headers = new Headers({ "myHeader": "myValue" });
		
		headers.append("Accept", "application/json");
		
		let params = new URLSearchParams();
		
		params.set('myParam', 'myValue');
		
		let options = new RequestOptions({ headers: headers, search: params });
		
		this.http.get("/api/products", options).toPromise().then((response) => {
			
			console.log(response.json());
			
		});
	}
	constructor() {}

}