import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ComComponent} from './ap/com/com.component';

const routes: Routes = [{
  path: '', component: ComComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
