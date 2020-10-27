import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {LogoComponent} from './ap/logo/logo.component';
import {ComComponent} from './ap/com/com.component';


@NgModule({
  declarations: [LogoComponent, ComComponent],
  exports: [
    LogoComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ]
})
export class BizModule {
}
