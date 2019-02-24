import { Injectable } from '@angular/core';
import { GlobalDataService } from './global-data.service';
import { ActivatedRoute } from '@angular/router';
import { TriggerElement, ElementCoords } from './global-classes';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionsService {

  constructor(
    private globalData: GlobalDataService
  ) { }

  transitionIntroOut(destination: string) {
    const intro = document.getElementById('intro');
    const streak = document.getElementById('blueStreak');
    if (intro) {
      this.spinOut(intro);
      if (streak) {
        this.shrinkOut(streak, { x: .5 });
      }
      setTimeout(() => {
        this.swapClass('main_menu', 'header-in', 'header-out');
        this.swapClassByQuery('body', 'bg-fade-in-background-2', 'bg-fade-in-background-1');
        this.navigateTo(destination);
      }, 2000);
    }
  }

  navigateTo(destination: string) {
    this.globalData.router.navigate([destination]);
  }

  onScroll(event) {
    if (!(this.globalData && this.globalData.scrollData && event.srcElement)) {
      return
    }
    const previousTop = this.globalData.scrollData.currentTop
    this.globalData.scrollData.currentTop = event.srcElement.scrollingElement.scrollTop;
    if (this.globalData.scrollData.currentTop <= 100) {
      this.globalData.scrollData.beenToTop = true;
    }
    this.globalData.scrollData.direction = (this.globalData.scrollData.currentTop < previousTop);
    console.log('globalFunctions: onScroll: ', this.globalData.scrollData);
    const els = this.trackElements();
    this.setTriggerClasses(els);
  }
  //    this.globalData.fadeCircles(this.scrollData.currentTop);


  trackElements(): Array<TriggerElement> {
    let els = this.globalData.watchOnScroll;
    for (let i = 0; i < els.length; i++) {
      let el: TriggerElement = els[i];

      // The element we're watching
      let element: Element = null;
      if (el.id) {
        element = document.getElementById(el.id);
      }
      else if (el.class) {
        element = document.querySelector('.' + el.class);
        element = (element && element[0]) ? element[0] : element;
      }

      if (element) {
        element;
        el.pos = new ElementCoords(element.getBoundingClientRect());
        el.pos.bottom = el.pos.top + el.pos.height;
        el.pos.right = el.pos.left + el.pos.width;

        // get the compare element as specified on DOM element (if specified)
        const compareElementValue = element.getAttribute('data-rh-trigger');

        // if compare element not specified, we use window
        el.compareElement = compareElementValue ? new TriggerElement(document.getElementById(compareElementValue)) : window;

        // get apply-to element if given in DOM element
        const applyToId = element.getAttribute('data-rh-apply-to');
        let applyToElement: HTMLElement = null;
        if (applyToId) {
          el.applyToElementId = applyToId;
          applyToElement = document.getElementById(applyToId);
          el.applyToElement = applyToElement;
        }

        // get offset value, if one was specified.
        el.compareElementPos = this.getTriggerElementPos(el.compareElement);
        const triggerOffsetValue = element.getAttribute('data-rh-trigger-offset');
        const triggerOffset = triggerOffsetValue ? Number.parseFloat(triggerOffsetValue) : 0;

        //determine if trigger condition has been met
        const compareElementPos: ElementCoords = new ElementCoords(this.getTriggerElementPos(el.compareElement));

        // we alter the compare point in the case of negative top to allow for when the element has gone 
        // passed the compare element.
        const comparePoint = (el.pos.top < 0) ? (el.pos.top * -1) + compareElementPos.height : el.pos.top;

        el.triggered = el.pos.top <= comparePoint;
        // console.log('elementId: ', el.id, 'el.triggered: ', el.triggered, 'el.pos.top', el.pos.top);
        if (el.triggered) {
          // if it's already been triggered for this trip up, ignore and reset triggered status
          if (el.triggeredAtPos && el.pos.top > el.triggeredAtPos.top) {
            el.triggeredAtPreviousPos = el.triggeredAtPos;
            el.triggeredAtPos = el.pos;
            el.triggered = false;
          }
          else if (el.pos.top > comparePoint) {
            // going back down, so reset trigger
            el.triggered = false;
            el.triggeredAtPreviousPos = el.triggeredAtPos;
            el.triggeredAtPos = null;
          }
        }
        // update array
        this.globalData.watchOnScroll[i] = element;
      }

    }
    // return the array (as a conveniencee so the calling function doesn't have to get it again)
    // console.log('trackElements: ', this.globalData.watchOnScroll);
    return this.globalData.watchOnScroll;

  }

  setTriggerClasses(list: Array<TriggerElement>) {
    for (let i = 0; i < list.length; i++) {
      const el = list[i];
      const classesToAdd = ['triggered'];
      if (el.triggerClasses) {
        el.triggerClasses.forEach(c => {
          classesToAdd.push(c);
        });
      }
      if (el.applyToElementId && !el.applyToElement) {
        el.applyToElement = document.getElementById(el.applyToElementId);
      }
      const applyToElement = el.applyToElement ? el.applyToElement : el;
      if (el.triggered) {

        classesToAdd.forEach(c => {
          applyToElement.classList.add(c);
        });
      }
      else {
        classesToAdd.forEach(c => {
          applyToElement.classList.remove(c);
        });
      }
    }
  }

  getTriggerElementPos(element) {
    let pos;
    if (element === window) {
      pos = {
        height: element.innerHeight,
        width: element.innerWidth,
        top: 0,
        bottom: element.innerHeight,
        left: 0,
        right: element.innerWidth
      };
    }
    else {
      const rect = element.getBoundingClientRect();
      pos = {
        bottom: pos.top + pos.height,
        right: pos.left + pos.width,
        ...rect
      }
    }
    return pos;
  }

  scrollToElement(data: any) {
    const routeData = (() => {
      let retVal;
      this.globalData.scrollRoutes.forEach(x => {
        if (x.route === this.globalData.router.url) {
          retVal = x;
        }
      });
      return retVal;
    })();
    const selfTop = document.getElementById(routeData.self).getBoundingClientRect().top;
    let othersTotal: number = 0;
    routeData.above.forEach(x => {
      othersTotal += document.getElementById(x).getBoundingClientRect().height;
    });
    const scrollTarget = (window.scrollY * -1) + (selfTop + othersTotal);
    window.scrollTo({
      behavior: "smooth",
      top: scrollTarget,
      left: 0
    })
  }


  setIntroClasses(wait: number = 0) {
    setTimeout(() => {
      if (this.globalData.router.url === '/intro') {
        this.swapClassByQuery('body', 'bg-fade-in-background-1', 'bg-fade-in-background-2');
        this.globalData.setProperty('headerHidden', true);
      }
      else {
        this.swapClassByQuery('body', 'bg-fade-in-background-2', 'bg-fade-in-background-1');
        this.globalData.setProperty('headerHidden', false);
      }
    }, wait);
  }


  addClass(name: string, className: string) {
    const el = document.getElementById(name);
    if (el) {
      el.classList.add(className);
    }
  }

  swapClass(name: string, classNameIn: string, classNameOut: string, wait: number = 0) {
    setTimeout(() => {
      const el = document.getElementById(name);
      if (el) {
        if (classNameIn) {
          el.classList.add(classNameIn);
        }
        if (classNameOut) {
          el.classList.remove(classNameOut);
        }
    }
    }, wait);
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

  swapAllByClass(name: string, classNameIn: string, classNameOut: string, delay: number = 0) {
    setTimeout(() => {
      let els = document.querySelectorAll('.' +  name);
      if (els && els.length) {
        for (let i = 0; i < els.length; i++) {
          if (classNameIn) {
            els[i].classList.add(classNameIn);
          }
          if (classNameOut) {
            els[i].classList.remove(classNameOut);
          }
        }
      }
    }, delay);
  }


  spinOut(el) {
    el.style.transition = 'transform 1.5s ease-in';
    el.style.transform = 'rotate(1440deg) scale(0, 0)'
  }

  shrinkOut(el, endScale) {
    el.style.transition = 'transform 1.5s ease-in';
    el.style.transform = 'scale(' + (endScale.x ? endScale.x : 1) + ', ' + (endScale.y ? endScale.y : 1) + ')';
  }

  menuClick(page: string, activeRoute: ActivatedRoute) {
    console.log('menuClick: ', activeRoute);
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
