import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './biz/app-routing.module';
import {AppComponent} from './app.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';

// shared module
import {SharedModule} from './shared/shared.module';


import {BizModule} from './biz/biz.module';


registerLocaleData(en);


// // icon
// import {IconDefinition} from '@ant-design/icons-angular';
// import {NzIconModule} from 'ng-zorro-antd/icon';
//
//
// import * as AllIcons from '@ant-design/icons-angular/icons';
// const antDesignIcons = AllIcons as {
//   [key: string]: IconDefinition;
// };
// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BizModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
