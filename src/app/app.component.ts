import { Component, OnInit, Inject } from '@angular/core';
import * as AOS from 'aos';
import { DOCUMENT } from "@angular/common";
import { GlobalDataService } from './shared/global-data.service';
import { GlobalFunctionsService } from './shared/global-functions.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rob-net';

  aosConfig = {
    offset: 0,
    delay: 500,
    duration: 800,
    easing: 'ease-out',
    anchorPlacement: 'top'
  };

  constructor(
    @Inject(DOCUMENT) document,
    private globalData: GlobalDataService,
    private globalFunctions: GlobalFunctionsService
  ) {
  }

  ngOnInit() {
    AOS.init(this.aosConfig);

    if (window.scrollY > 10) {
      this.globalFunctions.scrollToTop(2500, 0, 0);
    }
    this.globalFunctions.setIntroClasses(200);
  }






}

