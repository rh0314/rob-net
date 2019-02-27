import { Component, OnInit, Inject, OnChanges, OnDestroy } from '@angular/core';
// import { Router, Route, ActivatedRoute, Params, Data } from '@angular/router';
import { GlobalDataService } from '../shared/global-data.service';
import { GlobalFunctionsService } from '../shared/global-functions.service';
import { DOCUMENT, NgForOf } from "@angular/common";
import {  } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  techItems: Array<any>;
  backImage: any;
  pipes: any;

  // move to global service
  constructor(
    @Inject(DOCUMENT) document,
    private globalData: GlobalDataService,
    private globalFunctions: GlobalFunctionsService,
  ) {
  }

  ngOnInit() {
    this.globalData.setProperty('headerHidden', false);
    this.globalFunctions.swapClass('homePage', 'page-in', 'page-out', 500);
    this.initItems();
    window.addEventListener('scroll', (event) => {
      this.globalFunctions.onScroll(event);
    });
  }

  ngAfterViewInit() {
    window.addEventListener('resize', this.globalFunctions.onScroll);
    window.addEventListener('scroll', this.globalFunctions.onScroll);
    this.globalFunctions.swapAllByClass('park', 'mute', '', 45000);
  }

  ngOnDestroy() {
    this.globalFunctions.swapClass('homePage', 'page-out', 'page-in');
  }

  initialResize() {
  }

  fadeCircles(scrollTop: number) {
    let homePage = document.getElementById('homePage');
    if (homePage) {
      homePage = homePage[0] ? homePage[0] : homePage;
    }
    const nextPage = homePage.getBoundingClientRect().top - window.innerHeight;
    console.log(nextPage, window.innerHeight);
    const fadeOut = nextPage <= window.innerHeight;
    let circlesContainer = document.querySelector('.circles-container-anchor');
    if (circlesContainer) {
      circlesContainer = circlesContainer[0] ? circlesContainer[0] : circlesContainer;
      if (!fadeOut) {
        circlesContainer.classList.remove('out');
      }
      else {
        circlesContainer.classList.add('out');
      }
    }
  }
  onResize() {

  }

  onScrollAndResize() {

  }


  initItems() {
    this.techItems = [

      // R0 - going across
      {
        text: "HTML/HTML5", gridCol: 0, gridRow: 0, duration: 1000, delay: 0,
        image: { path: "../../assets/images/internet-icons/html5.png", sizeX: .8, sizeY: .8 }, startX: -2000, startY: -16000,

        parkClass: 'park r1c1', parkTime: 4000
      },
      {
        text: "Bootstrap", gridCol: -1, gridRow: 0, duration: 1000, delay: 1000, subText: '5+ years experience using Bootstrap components.',

        image: { path: "../../assets/images/internet-icons/bootstrap.png", sizeX: 1.5, sizeY: 1.5 },
        startX: '9999', startY: '-999', parkClass: 'park r1c6', parkTime: 4000
      },
      {
        text: "NodeJS", gridCol: 2, gridRow: 2, duration: 3000, delay: 500,
        image: { path: "../../assets/images/internet-icons/node-js.png", sizeX: 1.1, sizeY: .8 }, startX: -6000, startY: 7500,
        parkTime: 4000, parkClass: 'park r1c3'
      },
      {
        text: "Angular (2+)", gridCol: 1, gridRow: 0, duration: 500, delay: 3000, parkTime: 4000, parkClass: 'park r1c5',
        subText: "Over 5 years experience developing Angular Applications - Experienced with all angular versions",
        image: { path: "../../assets/images/internet-icons/angular2.png", sizeX: 1.3, sizeY: 1.5 },
        startX: 0, startY: 3000
      },
      {
        text: "CSS", gridCol: 0, gridRow: 0, duration: 2000, delay: 2000,
        image: { path: "../../assets/images/internet-icons/css3.png", sizeY: 1.0, sizeX: 0.8 }, startX: 0, startY: -5000,
        parkTime: 3000, parkClass: 'park r1c2'
      },
      {
        text: "ASP.NET", gridCol: -1, gridRow: 0, duration: 1500, delay: 4000,
        image: { path: "../../assets/images/internet-icons/net-logo.png", sizeX: '0.8', sizeY: '0.8' }, startX: '6000', startY: '4000',
        parkTime: 2500, parkClass: 'park r1c7'
      },


      // // COL 2 (5th col) - going down 
      {
        text: "SQL Scripting", gridCol: 1, gridRow: 0, duration: 1500, delay: 4500,
        image: { path: "../../assets/images/internet-icons/sql.svg" }, startX: -6000, startY: 9999, parkTime: 2000, parkClass: 'park r1c4'
      },
      {
        text: "C#", gridCol: 0, gridRow: 0, duration: 2000, delay: 5500,
        image: { path: "../../assets/images/internet-icons/c-sharp2.png", sizeX: .85, sizeY: 1.1 }, startX: '650', startY: '-1000', parkTime: 4000, parkClass: 'park r2c7'
      },
      {
        text: "Data transformation", gridCol: -1, gridRow: 0, duration: 1500, delay: 6000,
        image: { path: "../../assets/images/internet-icons/database-icon-white.png" }, startX: '-300', startY: '-9000', parkTime: 4000, parkClass: 'park r3c7'
      },

      // // COL -2 (first col) - going down

      {
        text: "JavaScript", gridCol: 1, gridRow: 0, duration: 1000, delay: 5000,
        image: { path: "../../assets/images/internet-icons/javascript.png", sizeX: 1, sizeY: 1 }, startX: 400, startY: 4000, parkTime: 2000, parkClass: 'park r2c1'
      },
      {
        text: "JQuery", gridCol: 0, gridRow: 0, duration: 1250, delay: 8000,
        image: { path: "../../assets/images/internet-icons/jquery.png", sizeX: 1.25, sizeY: 1.25 }, startX: -1000, startY: 9999,
        parkTime: 4000, parkClass: 'park r3c1'
      },

      {
        text: "AngularJS", gridCol: -1, gridRow: 0, duration: 1500, delay: 8000,
        subText: "",
        image: { path: "../../assets/images/internet-icons/angularjs.png", sizeX: 1.5, sizeY: 0.6 },
        startX: 2000, startY: 1000, parkTime: 5000, parkClass: 'park r4c2'
      },

      {
        text: "ReactJS", gridCol: 1, gridRow: 0, duration: 1000, delay: 9000,
        image: { path: "../../assets/images/internet-icons/react-neg.v2.png", sizeX: '1.15', sizeY: 'auto' }, startX: 400, startY: -500,
        parkTime: 4000, parkClass: 'park r4c6'
      },

      // // // R4, C-1
      {
        text: "Delightful User Experience", subText: "Applications developed with the user in mind and a goal of exceeding thier expectations - every time!",
        image: { path: "../../assets/images/internet-icons/ux-beating-heart.v4.white.gif", sizeX: 1.3, sizeY: 1.3 },
        startX: -1500, startY: -500, gridCol: 0, gridRow: 1, duration: 1500, delay: 2000,
        parkTime: 16000, parkClass: 'park r4c4'
      },
      {
        text: "Custom Applications", subText: "Applications designed and delivered to meet your specifications.",
        image: { path: "../../assets/images/internet-icons/application-laptop.png", sizeX: 1, sizeY: 1 },
        startX: -1500, startY: -500, gridCol: -1, gridRow: 1, duration: 1000, delay: 4000,
        parkTime: 15000, parkClass: 'park r4c3'
      },
      {
        text: "Database Driven Applications", gridCol: 1, gridRow: 1, duration: 500, delay: 500,
        image: { path: "../../assets/images/internet-icons/data-driven.png", sizeX: 1.3, sizeY: 1.1 }, startX: 8000, startY: 2000,
        parkTime: 16000, parkClass: 'park r4c5'
      },



      // R0, C2


      // { text: "Web-Based Tools", image: { path: "" }, startX: '', startY: '', gridCol: '', gridRow: '', duration: 0, delay: 0, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      // { text: "HTML/HTML5", image: "", startX: '', startY: '', gridCol: '', gridRow: '', duration: 0, delay: 0, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      // { text: "Multiple-OS Proficiency", image: { path: "../../assets/images/internet-icons/multi-os.png", sizeX: 1, sizeY: 1 }, startX: '-50000', startY: '-50000', gridCol: 1, gridRow: 2, duration: 6000, delay: 2500, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },

    ];
  }





}
