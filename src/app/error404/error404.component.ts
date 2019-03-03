import { Component, OnInit, AfterViewInit } from '@angular/core';

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
  //   let p: Element | HTMLElement | HTMLCollectionOf<Element> = document.getElementsByClassName('pacman-container');
  //   if (p && p[0]) {
  //     p = p[0];
  //     setTimeout(() => {
  //       p.classList.add('move')
  //     }, 500);
  //   }
  }

}
