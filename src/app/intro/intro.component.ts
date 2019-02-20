import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  currentPage: string = 'intro';

  constructor() { }

  ngOnInit() {
  }

  clickEnter(page) {
    const intro = document.getElementById('intro');
    if (intro) {
      this.transitionIt(intro);
    }
    else {
      console.error('intro NOT FOUND!');
    }
  }

  transitionIt(el) {
    el.style.transition = 'transform 3s ease-out';
    el.style.transform = 'rotate(720deg) scale(0, 0)'
    // setTimeout(() => {
    //   el.style.transition = 'transform 1s ease-in';
    //   el.style.transform = 'translate-y -1000px';

    //   // el.style.transition = 'transform 3s ease-in';
    //   // el.style.transform += 'scale(0.1, 0.1)';
    //   // setTimeout(() => {
    //   //   el.style.transition = 'transform 1s ease-in-out';
    //   //   el.style.transform += 'translateY(-1000px)';
    //   // }, 850);
    // }, 2000);

  }

}
