import { Component, OnInit, HostListener } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
    private router: Router, 
  ) {
    
   }

  ngOnInit() {
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
