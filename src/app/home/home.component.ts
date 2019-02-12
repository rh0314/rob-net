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
  myText: string = "something";
  scrollTop = 0;

  constructor(
    @Inject(DOCUMENT) document,
    private router: Router,
    private route: ActivatedRoute,
    private global: GlobalDataService,
  ) { }

  ngOnInit() {
    this.initItems();
    console.log(this.techItems);

    setTimeout(() => {
      this.backImage = '../../assets/images/thumbsup-mitchell.v3.png';
    }, 3000);

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
  }

  onResize() {

  }

  onScrollAndResize() {

  }

  initItems() {
    this.techItems = [
      { text: "Custom Application Development", image: { path: "" }, startX: '9999', startY: '-999', homeX: -1, homeY: '0', duration: 10000, delay: 1000, backImage: '' },
      // { text: "Database Driven Applications", image: { path: "" }, startX: '', startY: '', homeX: '', homeY: '', duration: 0, delay: 0, backImage: '' },
      // { text: "Web-Based Tools", image: { path: "" }, startX: '', startY: '', homeX: '', homeY: '', duration: 0, delay: 0, backImage: '' },
      { text: "Delightful, Intuitive User Experience", image: { path: "../../assets/images/internet-icons/ux.png", sizeX: 1, sizeY: 1 }, startX: -1500, startY: -500, homeX: 1, homeY: 0, duration: 6000, delay: 2000, backImage: '' },
      { text: "Data transformation", image: { path: "../../assets/images/internet-icons/data-transformation.png" }, startX: '-300', startY: '-9000', homeX: -2, homeY: 0, duration: 2000, delay: 3500, backImage: '' },
      { text: "ASP.NET", image: { path: "../../assets/images/aspnet-logo.png", sizeX: '1.1', sizeY: '1.1' }, startX: '6000', startY: '4000', homeX: 2, homeY: 0, duration: 3000, delay: 2500, backImage: '' },
      { text: "C#", image: { path: "../../assets/images/internet-icons/c-sharp.png" }, startX: '650', startY: '-1000', homeX: 1, homeY: 1, duration: 0, delay: 0, backImage: '' },
      { text: "Angular (2+)", image: { path: "../../assets/images/internet-icons/angular2.png", sizeX: .85, sizeY: 'auto' }, startX: 0, startY: 5000, homeX: 0, homeY: 0, duration: 1750, delay: 3000, backImage: '' },
      // { text: "AngularJS", image: { path: "../../assets/images/internet-icons/angularjs.png", sizeX: '250px', sizeY: 'auto' }, startX: '', startY: '', homeX: '', homeY: '', duration: 0, delay: 0, backImage: '' },
      // { text: "ReactJS", image: { path: "../../assets/images/internet-icons/react-neg.v2.png", sizeX: '250px', sizeY: 'auto' }, startX: '', startY: '', homeX: '', homeY: '', duration: 0, delay: 0, backImage: '' },
      // { text: "JQuery", image: "", startX: '', startY: '', homeX: '', homeY: '', duration: 0, delay: 0, backImage: '' },
      // { text: "NodeJS", image: "", startX: '', startY: '', homeX: '', homeY: '', duration: 0, delay: 0, backImage: '' },
      // { text: "VB.NET", image: "", startX: '', startY: '', homeX: '', homeY: '', duration: 0, delay: 0, backImage: '' },
      // { text: "HTML/HTML5", image: "", startX: '', startY: '', homeX: '', homeY: '', duration: 0, delay: 0, backImage: '' },
      // { text: "CSS", image: "", startX: '', startY: '', homeX: '', homeY: '', duration: 0, delay: 0, backImage: '' },
      // { text: "Bootstrap", image: "", startX: '', startY: '', homeX: '', homeY: '', duration: 0, delay: 0, backImage: '' },
      // { text: "SQL", image: "", startX: '', startY: '', homeX: '', homeY: '', duration: 0, delay: 0, backImage: '' },
      { text: "Multiple-OS Proficiency", image: { path: "../../assets/images/internet-icons/multi-os.png", sizeX: 1, sizeY: 1 }, startX: '-50000', startY: '-50000', homeX: -1, homeY: 1, duration: 6000, delay: 2500, backImage: '' },
    ];
  }


}
