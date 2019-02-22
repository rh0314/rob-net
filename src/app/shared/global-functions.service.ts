import { Injectable } from '@angular/core';
import { GlobalDataService } from '../shared/global-data.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor(
    private globalData: GlobalDataService
  ) { }

  onScroll(event) {
    if (!(this.globalData && this.globalData.scrollData) ) {
      return
    }
    const previousTop = this.globalData.scrollData.currentTop
    this.globalData.scrollData.currentTop = event.srcElement.scrollingElement.scrollTop;
    if (this.globalData.scrollData.currentTop <= 100) {
      this.globalData.scrollData.beenToTop = true;
    }
    this.globalData.scrollData.direction = (this.globalData.scrollData.currentTop < previousTop);
    console.log('globalFunctions: onScroll: ', this.globalData.scrollData);
  }
//    this.globalData.fadeCircles(this.scrollData.currentTop);



  addClass(name: string, className: string) {
    const el = document.getElementById(name);
    if (el) {
      el.classList.add(className);
    }
  }

  swapClass(name: string, classNameIn: string, classNameOut: string) {
    const el = document.getElementById(name);
    if (el) {
      el.classList.remove(classNameOut);
      el.classList.add(classNameIn);
    }
  }

  swapClassByQuery(name: string, classNameIn: string, classNameOut: string) {
    let el = document.querySelector(name);
    if (el && el[0]) {
      el = el[0];
    }
    if (el) {
      el.classList.remove(classNameOut);
      el.classList.add(classNameIn);
    }
  }


  spinOut(el) {
    el.style.transition = 'transform 1.5s ease-in';
    el.style.transform = 'rotate(1440deg) scale(0, 0)'
  }

  menuClick(page: string, activeRoute: ActivatedRoute) {
    
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
