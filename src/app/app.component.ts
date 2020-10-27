import {AfterViewInit, Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet> `
})
export class AppComponent implements AfterViewInit {

  // title = 'ten';
  //
  //
  // obj = {
  //   title: 'gh'
  // };


  ngAfterViewInit(): void {
    // const map = new AMap.Map('container', {
    //   zoom: 11, // 级别
    //   center: [116.397428, 39.90923], // 中心点坐标
    //   viewMode: '3D' // 使用3D视图
    // });
  }
}
