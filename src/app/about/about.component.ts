import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from './../shared/global-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private global: GlobalDataService) { }

  ngOnInit() {
    // this.global.routeData = {
    //   opacity: 80,
    //   backgroundImage: 'fingers'
    // }
    // console.log('about: global: ', this.global)
  }

}
