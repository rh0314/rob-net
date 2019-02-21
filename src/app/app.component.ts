import { Component, OnInit, Inject } from '@angular/core';
import * as AOS from 'aos';
import { DOCUMENT } from "@angular/common";
import { GlobalDataService } from './shared/global-data.service';
import { GlobalFunctionsService } from './shared/global-functions.service'
import { elementStart } from '@angular/core/src/render3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rob-net';

  showStars1: boolean;
  showStars2: boolean;
  showStars3: boolean;
  showAllStars: boolean;

  aosConfig = {
    offset: 0,
    delay: 500,
    duration: 800,
    easing: 'ease-out',
    anchorPlacement: 'top'
  };

  constructor(
    @Inject(DOCUMENT) document,
    private dataService: GlobalDataService,
    private globalFunctions: GlobalFunctionsService
  ) {
  }

  ngOnInit() {
    AOS.init(this.aosConfig);
    document.addEventListener('aos:in', (detail) => {
      console.log('ani in: ', detail);
    });
    document.addEventListener('aos:out', (detail) => {
      console.log('ani out: ', detail);
    });

    if (window.scrollY > 10) {
      this.globalFunctions.scrollToTop(2500, 0, 0);
    }

    this.showStars1 = this.dataService.showStars1;
    this.showStars2 = this.dataService.showStars2;
    this.showStars3 = this.dataService.showStars3;
    this.showAllStars = this.dataService.showAllStars;
    console.log(this.showStars1, this.showStars2, this.showStars3, this.showAllStars);
    this.dataService.setProperty('homeHidden', true); 
    this.dataService.setProperty('headerHidden', true);
  }






}

