import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 		public list:number[] = [
        1, 2, 3, 4, 5, 6, 7
    ]
  constructor() { }

  ngOnInit() {
  }

}
