import { Component, OnInit, Inject } from '@angular/core';
// import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from "@angular/common";
import { injectRootLimpMode } from '@angular/core/src/di/injector_compatibility';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentPage: string = 'intro';
  showLinks: boolean = false;

  // scroll: {
  //   top: number,
  //   previous: -1,
  //   direction: boolean // true = up, false = down
  // }


  // @HostListener('window:scroll', ['$event'])
  // onscroll(event) {
  //     this.scroll.top = event.srcElement.scrollTop;
  //     this.scroll.direction = this.scroll.top > this.scroll.previous;
  //     this.adjustMenu();
  // }
  constructor(
    @Inject(DOCUMENT) document,
  ) {

  }

  ngOnInit() {
    this.showLinks = this.currentPage == 'intro';
  }

  menuClick(page) {
    if (this.currentPage === 'intro') {
      const intro = document.getElementById('introPage');

      if (intro) {
        intro.style.transitionProperty = 'top';
        intro.style.transitionDuration = '1500ms';
        intro.style.transitionTimingFunction = 'ease-out';
        intro.style.top = '-2000px';
      }
      else {
        console.error('intro NOT FOUND!');
      }
    }
  }

  // adjustMenu() {
  //   const nContainer = document.querySelector('.navbar-container');
  //   if (nContainer) {
  //     if (this.scroll.direction) {
  //       nContainer.classList.remove('going-down');
  //     }
  //     else {
  //       nContainer.classList.add('going-down');
  //     }

  //   }
  // }


}
