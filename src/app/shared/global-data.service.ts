import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  private _currentPage: string = 'intro';
  private _showHeader: boolean = true;
  private _storageObject: any = {

  };
  
  showStars1 = true;
  showStars2 = true;
  showStars3 = true;

  
  get currentPage():string {
    return this._currentPage;
  }
  set currentPage(value:string) {
    this._currentPage = value;
  }
  get showHeader():boolean {
    return this._showHeader;
  }
  set showHeader(value: boolean) {
    this._showHeader = value;
  }
  get showAllStars():boolean {
    return this.showStars1 && this.showStars2 && this.showStars3;
  }
  getProperty(prop) {
    return this._storageObject[prop];
  }
  setProperty(prop, value) {
    this._storageObject[prop] = value;
  }

  constructor(private activatedRoute: ActivatedRoute) {
   }
}
