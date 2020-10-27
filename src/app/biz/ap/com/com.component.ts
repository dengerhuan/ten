import {Component, ElementRef, OnInit, AfterViewInit, Renderer2, OnDestroy} from '@angular/core';
import {LocationService} from '../../location.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.less']
})
export class ComComponent implements OnInit, AfterViewInit, OnDestroy {


  name = '12132';

  delay = 30;
  dis = ' xianlu tuanjienanlu beijing';

  linArr = [];

  locationSubscription: Subscription;

  constructor(private el: ElementRef, private render: Renderer2, private location: LocationService) {
  }

  ngOnInit(): void {
    console.log(this.el);
  }

  ngAfterViewInit(): void {


    //
    // this.render.setProperty(this.el, 'id', 'mapa');
    // //


    //121.445	31.213

    const map = new AMap.Map('mapa', {
      zoom: 17, // 级别
      center: [121.445, 31.213], // 中心点坐标
      viewMode: '3D' // 使用3D视图
    });


    const marker = new AMap.Marker({
      map,
      position: [121.445, 31.213],
      icon: 'https://webapi.amap.com/images/car.png',
      offset: new AMap.Pixel(-26, -13),
      autoRotation: true,
      angle: -90,
    });

    const passedPolyline = new AMap.Polyline({
      map,
      // path: lineArr,
      strokeColor: '#AF5',  // 线颜色
      // strokeOpacity: 1,     // 线透明度
      strokeWeight: 6,      // 线宽
      // strokeStyle: "solid"  //线样式
    });


    this.locationSubscription = this.location.location.subscribe(poi => {


      // console.log(poi);
      // //   map.setZoom([lng, lat]); //设置地图中心点
      // map.setCenter(poi); //设置地图中心点
      // marker.moveTo(poi, 100000, null);
      // this.linArr.push(poi);
      // passedPolyline.setPath(this.linArr);
      // //
      // //


    });


    console.log(map);
  }

  ngOnDestroy(): void {
    this.locationSubscription.unsubscribe();
  }

}



