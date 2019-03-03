import { Component, OnInit, AfterViewInit } from '@angular/core';
import { getNativeByTNode } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.checkPacman();
    //   let p: Element | HTMLElement | HTMLCollectionOf<Element> = document.getElementsByClassName('pacman-container');
    //   if (p && p[0]) {
    //     p = p[0];
    //     setTimeout(() => {
    //       p.classList.add('move')
    //     }, 500);
    //   }
  }

  checkPacman() {
    setTimeout(() => {
      let p = document.getElementById('pacman');
      const b = document.getElementById('homeBtn');
      if (p && b)  {
        if (p.getBoundingClientRect().left >= ((window.innerWidth / 2) - 250)) {
          b.classList.add('eaten');
        }
        else {
          b.classList.remove('eaten');
        }
      }
      this.checkPacman();
    }, 500);
  }
}
