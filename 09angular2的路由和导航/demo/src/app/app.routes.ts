
//首先我们引入Routes，它其实就是一个路由列表类型Route[],而Route是Angular路由框架定义的一个接口
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingComponent } from './setting/setting.component';

//导出后在app.module中引用该配置
export const routes: Routes = [
    {
    	//path是这个路由对应的URL路径.
    	//一般情况下，用户都是通过输入域名等打开我们的应用，因为用户没有在域名后面输入路径，这时候对应的url就相当于是''。对于这个路径，我们可以设置一个组件，也可以重定向到另一个路径。
        path: '',
        
        //重定向
        redirectTo: '/home',
        
        //当我们使用redirectTo重定向时，需要pathMatch来指定匹配方式，也就是如何匹配上面的''。我们可以完全匹配full,也可以匹配前缀prefix。
        //一旦使用了prefix，就会变成不管用户打开任何路径，都会重定向到'/todo/list'，因为任何路径都能看作是有一个空字符串的前缀。
        pathMatch: 'full'
    },
    {
        path: 'home',
        
        //路由加载的组件
        component: HomeComponent
    },
     {
    	
        path: 'about',
        component:AboutComponent
    },
     {
        path: 'setting',
        component: SettingComponent
    },
    
    
    //路由也可以带有参数，但是需要注意的是在router-link的时候传递参数
    {
        path: 'home/:id',
        
        //路由加载的组件
        component: HomeComponent
    },
     {
    	
        path: 'about/:name',
        component:AboutComponent
     },
];

