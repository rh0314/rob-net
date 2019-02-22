import { Component, OnInit } from '@angular/core';
import { GlobalFunctionsService } from '../shared/global-functions.service';
import { GlobalDataService } from '../shared/global-data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  currentPage: string = 'intro';

  constructor(
    private globalData: GlobalDataService,
    private globalFunctions: GlobalFunctionsService
  ) { }

  ngOnInit() {

  }

  clickEnter(page) {
    const intro = document.getElementById('intro');
    if (intro) {
      this.globalFunctions.spinOut(intro);
      setTimeout(() => {
        this.globalFunctions.swapClass('main_menu', 'header-in', 'header-out');
        this.globalFunctions.swapClass('homePage', 'home-in', 'home-out');
        setTimeout(() => {
          this.globalData.setProperty('introHidden', true);
          this.globalFunctions.swapClassByQuery('body', 'bg-fade-in-background-2', 'bg-fade-in-background-1');
          this.globalData.setProperty('headerHidden', false);
          this.globalData.setProperty('homeHidden', false);
          this.globalFunctions.swapClass('homePage', 'home-in', 'home-out');
        }, 1000);
      }, 2000);
    }
    else {
      console.error('intro NOT FOUND!');
    }
  }


}
