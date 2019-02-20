import { Component, OnInit, Inject } from '@angular/core';
import * as AOS from 'aos';
import { DOCUMENT } from "@angular/common";
// import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rob-net';
  currentPage: string = "intro";

  aosConfig = {
    offset: 0,
    delay: 500,
    duration: 800,
    easing: 'ease-out',
    anchorPlacement: 'top'
  };

  constructor(
    @Inject(DOCUMENT) document,
    // private router: Router,
    // private route: ActivatedRoute
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
      this.scrollToTop(2500, 0, 0);
    }
  }

  scrollToTop(delay: number, x: number, y: number) {
    if (delay) {
      setTimeout(() => {
        window.scrollTo({
          top: x,
          left: y,
          behavior: 'smooth'
        });
      }, delay);
    }
  }




}

