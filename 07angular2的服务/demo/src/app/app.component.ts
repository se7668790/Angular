import { Component ,OnInit} from '@angular/core';

import {User} from "./classes/User";
import {UserService} from "./自定义服务/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  //设置依赖的服务
   providers: [UserService]
})
export class AppComponent implements OnInit{
  
  title = 'app works!';
  
  users: User[];

    constructor(
        private userService: UserService
    ){}

    getUsersData() {
        this.userService.getUsers()
            .then(users => this.users = users);
    }

		//ngOnInit - 第一次ngOnChanges之后
    ngOnInit() {
        this.getUsersData();
    }

}
