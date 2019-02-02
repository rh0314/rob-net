import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalDataService } from './../shared/global-data.service';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  windowHeight: number;
  headerHeight: number;
  footerHeight: number;

  constructor(private router: Router, private acitveRoute: ActivatedRoute, private global: GlobalDataService) {
    console.log('router: ', router);
    console.log('activeRoute: ', acitveRoute)
    console.log('global: ', global)
  }

  ngOnInit() {
    window.addEventListener('scroll', e => {
      this.fixElements();
    });
    window.addEventListener('resize', e => {
      this.fixElements();
    });

    setTimeout(() => {
      this.fixElements();
    }, 500);

  }

  resizeGlobalElements() {
    // get the elements
    const main = document.getElementById('home');
    const overlay = document.getElementById('rn-main-overlay');
    const routerContainer = document.getElementById('router-outlet-container');

    //c= calculated sizes (elements to be reszied)
    const rch = this.windowHeight - (this.footerHeight + this.headerHeight);
    const mh = this.windowHeight - this.footerHeight;

    // resize the elements
    main.style.height = mh + 'px';
    overlay.style.height = mh + 'px';
    routerContainer.style.height = rch + 'px';
    routerContainer.style.top = (this.headerHeight + 1) + 'px';
  }

  resizeVideoElements() {
    const videoEl = document.getElementById('bg-video');
    if (videoEl) {
      const vh = this.windowHeight - this.footerHeight;
      const vt = this.headerHeight * -1;
      videoEl.style.height = vh + 'px';
      videoEl.style.top = vt + 'px';
    }

  }

  resizeAboutElements() {
    const aboutScrollBox = document.getElementById('about-scroll-box');
    if (aboutScrollBox) {
      const astSetOffset = 344;
      const asb = this.windowHeight - astSetOffset;
      aboutScrollBox.style.maxHeight = asb + 'px';
    }
  }


  fixElements() {
    this.footerHeight = 40;
    const header = document.getElementById('rn-main-menu-bg');;
    this.windowHeight = window.innerHeight;
    this.headerHeight = header.offsetHeight;

    this.resizeGlobalElements();
    this.resizeAboutElements();
    this.resizeVideoElements();
    window.resizeTo(800, 600);
  }


}
