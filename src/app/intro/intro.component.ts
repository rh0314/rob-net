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
      intro.style.transition = 'transform 750ms ease-in-out';
      intro.style.transform += 'translateY(-1000px)';
  }
    else {
      console.error('intro NOT FOUND!');
    }
  }

}
