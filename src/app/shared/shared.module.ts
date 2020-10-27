import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


import {NgZorroAntdModule} from './zorro';

@NgModule({
  declarations: [],
  imports: [
    NgZorroAntdModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [FormsModule,
    RouterModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule]
})
export class SharedModule {
}
