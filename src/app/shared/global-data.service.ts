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
    intro: 'rh-background-1',
    home: 'rh-background-2',
    about: 'rh-background-2',
    resume: 'rh-background-2',
    code: 'rh-background-3',
    pipes: 'rh-background-3'
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
