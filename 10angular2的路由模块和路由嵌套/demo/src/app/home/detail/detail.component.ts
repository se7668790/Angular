import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    id:number;
	
    constructor( public _route: ActivatedRoute, public _router: Router) {
    	
    	
    }

    goBack(){
    	
        this._router.navigate(['/home'])
    }
    ngOnInit() { 
        
    }

}
