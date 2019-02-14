import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { Router, Route, ActivatedRoute, Params, Data } from '@angular/router';
import { GlobalDataService } from '../shared/global-data.service';
import { DOCUMENT, NgForOf } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  techItems: Array<any>;
  backImage: any;
  scrollTop = 0;

  constructor(
    @Inject(DOCUMENT) document,
    private router: Router,
    private route: ActivatedRoute,
    private global: GlobalDataService,
  ) { }

  ngOnInit() {
    this.initItems();
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.onScrollAndResize);
    window.addEventListener('resize', this.onScrollAndResize);
  }

  ngAfterViewInit() {
  }

  initialResize() {
  }

  onScroll() {
    this.scrollTop = window.scrollY;
    console.log('scrollTop', this.scrollTop);
  }

  onResize() {

  }

  onScrollAndResize() {

  }

  initItems() {
    this.techItems = [
      { text: "Bootstrap", subText: '5+ years experience using Bootstrap components.', backImage: '../../assets/images/thumbsup-mitchell.v3.png', image: { path: "../../assets/images/internet-icons/bootstrap.png", sizeX: 1.5, sizeY: 1.5 }, startX: '9999', startY: '-999', gridCol: -1, gridRow: '0', duration: 650, delay: 1000 },
      { text: "Database Driven Applications", image: { path: "../../assets/images/internet-icons/application-database-blk.png", sizeX: 1.5, sizeY: 1.5 }, startX: 8000, startY: 2000, gridCol: 0, gridRow: 2, duration: 100, delay: 10000, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      // { text: "Web-Based Tools", image: { path: "" }, startX: '', startY: '', gridCol: '', gridRow: '', duration: 0, delay: 0, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "Delightful User Experience", image: { path: "../../assets/images/internet-icons/ux-beating-heart.gif", sizeX: 1.5, sizeY: 1.5 }, startX: -1500, startY: -500, gridCol: 0, gridRow: 1, duration: 600, delay: 2000, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "Data transformation", image: { path: "../../assets/images/internet-icons/data-transformation.png" }, startX: '-300', startY: '-9000', gridCol: -1, gridRow: 2, duration: 2000, delay: 3500, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "ASP.NET", image: { path: "../../assets/images/internet-icons/net-logo.png", sizeX: '1.2', sizeY: '1.2' }, startX: '6000', startY: '4000', gridCol: 2, gridRow: 0, duration: 3000, delay: 2500, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "C#", image: { path: "../../assets/images/internet-icons/c-sharp.png" }, startX: '650', startY: '-1000', gridCol: 1, gridRow: 1, duration: 2500, delay: 1500, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "Angular (2+)", image: { path: "../../assets/images/internet-icons/angular2.png", sizeX: 1.7, sizeY: 1.9 }, startX: 0, startY: 5000, gridCol: 0, gridRow: 0, duration: 1750, delay: 500, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "AngularJS", image: { path: "../../assets/images/internet-icons/angularjs.png", sizeX: 1.6, sizeY: 0.6 }, startX: 2000, startY: 1000, gridCol: -1, gridRow: 1, duration: 2000, delay: 1000, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "ReactJS", image: { path: "../../assets/images/internet-icons/react-neg.v2.png", sizeX: '1.15', sizeY: 'auto' }, startX: 400, startY: -500, gridCol: 2, gridRow: 2, duration: 1000, delay: 2000, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "JQuery", image: { path: "../../assets/images/internet-icons/jquery.png", sizeX: 1.25, sizeY: 1.25 }, startX: -1000, startY: 9999, gridCol: -2, gridRow: 1, duration: 4000, delay: 500, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "NodeJS", image: { path:  "../../assets/images/internet-icons/node-js.png", sizeX: 1.4 }, startX: -6000, startY: 7500, gridCol: -2, gridRow: 2, duration: 1000, delay: 4000, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      // { text: "VB.NET", image: "", startX: '', startY: '', gridCol: '', gridRow: '', duration: 0, delay: 0, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      // { text: "HTML/HTML5", image: "", startX: '', startY: '', gridCol: '', gridRow: '', duration: 0, delay: 0, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "CSS", image: { path: "../../assets/images/internet-icons/css3.png", sizeY: 1.2 }, startX: 0, startY: -5000, gridCol: 1, gridRow: 0, duration: 2000, delay: 2000, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "C#", image: { path: "../../assets/images/internet-icons/html5.png" }, startX: -2000, startY: -16000, gridCol: -2, gridRow: 0, duration: 750, delay: 750, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      { text: "SQL Scripting", image: { path:  "../../assets/images/internet-icons/sql.svg" }, startX: -6000, startY: 9999, gridCol: 2, gridRow: 1, duration: 3500, delay: 1500, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
      // { text: "Multiple-OS Proficiency", image: { path: "../../assets/images/internet-icons/multi-os.png", sizeX: 1, sizeY: 1 }, startX: '-50000', startY: '-50000', gridCol: 1, gridRow: 2, duration: 6000, delay: 2500, backImage: '../../assets/images/thumbsup-mitchell.v3.png' },
    ];
  }


}
