//引入系统模块
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//引入自定义模块
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//判断是否是生产环境
if (environment.production) {
 
 enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
