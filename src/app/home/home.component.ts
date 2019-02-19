import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { Router, Route, ActivatedRoute, Params, Data } from '@angular/router';
import { GlobalDataService } from '../shared/global-data.service';
import { DOCUMENT, NgForOf } from "@angular/common";
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  techItems: Array<any>;
  backImage: any;
  scrollData = {
    beenToTop: false,
    currentTop: 0,
    direction: false  // up = true, down = false
  }

  constructor(
    @Inject(DOCUMENT) document,
  ) { }

  ngOnInit() {
    this.initItems();
    window.addEventListener('scroll', (event) => {
      this.onScroll(event);
    });
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.onScrollAndResize);
    window.addEventListener('resize', this.onScrollAndResize);
    document.addEventListener('aos:in:super-duper', (e) => {
      console.log(e);
    });
    document.addEventListener('aos:slide-left', e => {
      console.log(e);
    });
  }

  ngAfterViewInit() {
  }

  initialResize() {
  }

  onScroll(event) {
    const previousTop = this.scrollData.currentTop
    this.scrollData.currentTop = event.srcElement.scrollingElement.scrollTop;
    if (this.scrollData.currentTop <= 100) {
      this.scrollData.beenToTop = true;
    }
    this.scrollData.direction = (this.scrollData.currentTop < previousTop);
    console.log(this.scrollData);
    this.fadeCircles(this.scrollData.currentTop);
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
      { text: "HTML/HTML5", gridCol: -2, gridRow: 0, duration: 1000, delay: 0, image: { path: "../../assets/images/internet-icons/html5.png" }, startX: -2000, startY: -16000, backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkClass: 'park x1', parkTime: 10000 },
      { text: "Bootstrap", gridCol: 0, gridRow: 2, duration: 2500, delay: 0, subText: '5+ years experience using Bootstrap components.', backImage: '../../assets/images/thumbsup-mitchell.v3.png', image: { path: "../../assets/images/internet-icons/bootstrap.png", sizeX: 1.5, sizeY: 1.5 }, startX: '9999', startY: '-999', parkClass: 'park x2', parkTime: 10000 },
      {
        text: "Angular (2+)", gridCol: -1, gridRow: 0, duration: 1500, delay: 0, parkTime: 10000, parkClass: 'park a1',
        subText: "Experienced with all angular versions",
        image: { path: "../../assets/images/internet-icons/angular2.png", sizeX: 1.7, sizeY: 1.9 },
        backImage: '../../assets/images/thumbsup-mitchell.v3.png', startX: 0, startY: 5000
      },
      { text: "CSS", gridCol: 1, gridRow: 0, duration: 1750, delay: 0, image: { path: "../../assets/images/internet-icons/css3.png", sizeY: 1.2 }, startX: 0, startY: -5000, backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 11000, parkClass: 'park x4' },
      {
        text: "ASP.NET", gridCol: 2, gridRow: 0, duration: 1500, delay: 1000,
        image: { path: "../../assets/images/internet-icons/net-logo.png", sizeX: '1.2', sizeY: '1.2' }, startX: '6000', startY: '4000', backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 11000, parkClass: 'park x5'
      },


      // COL 2 (5th col) - going down 
      {
        text: "SQL Scripting", gridCol: 2, gridRow: 1, duration: 1500, delay: 1500,
        image: { path: "../../assets/images/internet-icons/sql.svg" }, startX: -6000, startY: 9999, backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 12000, parkClass: 'park x6'
      },
      {
        text: "C#", gridCol: 1, gridRow: 1, duration: 1500, delay: 2000,
        image: { path: "../../assets/images/internet-icons/c-sharp.png" }, startX: '650', startY: '-1000', backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 12000, parkClass: 'park x7'
      },
      {
        text: "Data transformation", gridCol: 0, gridRow: 1, duration: 2500, delay: 500,
        image: { path: "../../assets/images/internet-icons/data-transformation.png" }, startX: '-300', startY: '-9000', backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 13000, parkClass: 'park x8'
      },
      {
        text: "Database Driven Applications", gridCol: -1, gridRow: 1, duration: 2750, delay: 500,
        image: { path: "../../assets/images/internet-icons/application-database-blk.png", sizeX: 1.5, sizeY: 1.5 }, startX: 8000, startY: 2000, backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 13000, parkClass: 'park x9'
      },

      // COL -2 (first col) - going down

      {
        text: "JavaScript", gridCol: -2, gridRow: 1, duration: 3000, delay: 0,
        image: { path: "../../assets/images/internet-icons/js.png", sizeX: 1, sizeY: 1 }, startX: 400, startY: 4000, backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 11000, parkClass: 'park x10'
      },
      { text: "JQuery", gridCol: -2, gridRow: 2, duration: 2250, delay: 500, image: { path: "../../assets/images/internet-icons/jquery.png", sizeX: 1.25, sizeY: 1.25 }, startX: -1000, startY: 9999, backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 12000, parkClass: 'park x11' },

      {
        text: "AngularJS", gridCol: -1, gridRow: 2, duration: 2500, delay: 500,
        image: { path: "../../assets/images/internet-icons/angularjs.png", sizeX: 1.6, sizeY: 0.6 }, startX: 2000, startY: 1000, backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 11000, parkClass: 'park x12'
      },

      {
        text: "ReactJS", gridCol: 1, gridRow: 2, duration: 3000, delay: 0,
        image: { path: "../../assets/images/internet-icons/react-neg.v2.png", sizeX: '1.15', sizeY: 'auto' }, startX: 400, startY: -500, backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 11000, parkClass: 'park x13'
      },

      // R4, C-1
      {
        text: "NodeJS", gridCol: 2, gridRow: 2, duration: 3000, delay: 500,
        image: { path: "../../assets/images/internet-icons/node-js.png", sizeX: 1.4 }, startX: -6000, startY: 7500, backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 10000, parkClass: 'park x14'
      },


      // R0, C2


      // { text: "Web-Based Tools", image: { path: "" }, startX: '', startY: '', gridCol: '', gridRow: '', duration: 0, delay: 0, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      // { text: "HTML/HTML5", image: "", startX: '', startY: '', gridCol: '', gridRow: '', duration: 0, delay: 0, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      // { text: "Multiple-OS Proficiency", image: { path: "../../assets/images/internet-icons/multi-os.png", sizeX: 1, sizeY: 1 }, startX: '-50000', startY: '-50000', gridCol: 1, gridRow: 2, duration: 6000, delay: 2500, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },

      {
        text: "Delightful User Experience", subText: "Applications developed with the user in mind and a goal of exceeding thier expectations - every time!",
        image: { path: "../../assets/images/internet-icons/ux-beating-heart.v2.gif", sizeX: 1.5, sizeY: 1.5 },
        startX: -1500, startY: -500, gridCol: 0, gridRow: 0, duration: 500, delay: 7500,
        backImage: '../../assets/images/thumbsup-mitchell.v3.png', parkTime: 10000, parkClass: 'park x0'
      },
    ];
  }


}
