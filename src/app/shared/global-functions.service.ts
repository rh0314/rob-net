import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor() { }


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
