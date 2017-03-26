import { Injectable } from '@angular/core';

import { User } from "../classes/User";
import { USERS } from "../const/user.data";

//@Injectable()让Angular 2知道一个类可以用于依赖注入器。 如果类上有其他Angular 2装饰器或没有任何依赖，@Injectable()不是必须的。重要的是任何要注入Angular 2的类都被装饰。 然而，最佳实践是使用@Injectable()来装饰注入，因为它对开发者更强的语义。

//还有一个相似的@Inject()是一个手动机制，让Angular 2知道必须注入参数。

@Injectable()
export class UserService {

	//定义一个方法返回值类型是一个User的数组
	 getUsers(): Promise<User[]> {
        return Promise.resolve(USERS);
    }
    getMockUsers(): Promise<User[]> {
        return new Promise(resolve => setTimeout(resolve(USERS), 2000))
            .then(() => this.getUsers());
    }

}
