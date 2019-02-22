import { Component, OnInit } from '@angular/core';
import { GlobalFunctionsService } from '../shared/global-functions.service';
import { GlobalDataService } from '../shared/global-data.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  currentPage: string = 'intro';

  constructor(
    private dataService: GlobalDataService,
    private globalFunctions: GlobalFunctionsService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.setProperty('headerHidden', true);
  }

  clickEnter(page) {
    const intro = document.getElementById('intro');
    if (intro) {
      this.globalFunctions.spinOut(intro);
      setTimeout(() => {
        this.globalFunctions.swapClass('main_menu', 'header-in', 'header-out');
        this.globalFunctions.swapClassByQuery('body', 'bg-fade-in-background-2', 'bg-fade-in-background-1');
        this.router.navigate(['/home']);
        // setTimeout(() => {
        // }, 1000);
      }, 2000);
    }
    else {
      console.error('intro NOT FOUND!');
    }
  }


}
