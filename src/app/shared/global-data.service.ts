import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  private _currentPage: string = 'intro';
  private _showHeader: boolean = true;
  private _storageObject: any = {
    nonIntroPages: []
  };

  pageBgClasses = {
    intro: 'bg-fade-in-background-1',
    home: 'bg-fade-in-background-2',
    about: 'bg-fade-in-background-2',
    resume: 'bg-fade-in-background-2',
    code: 'bg-fade-in-background-2'
  };

  scrollData = {
    beenToTop: false,
    currentTop: 0,
    direction: false  // up = true, down = false
  };

  introBgClass = '';
  nonIntroBgClass = '';

  watchOnScroll = [

  ];

  get currentPage(): string {
    return this._currentPage;
  }
  set currentPage(value: string) {
    this._currentPage = value;
  }
  get showHeader(): boolean {
    return this._showHeader;
  }
  set showHeader(value: boolean) {
    this._showHeader = value;
  }
  get router(): Router {
    return this._router;
  }
  getProperty(prop) {
    return this._storageObject[prop];
  }
  setProperty(prop, value) {
    this._storageObject[prop] = value;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
  }
}
