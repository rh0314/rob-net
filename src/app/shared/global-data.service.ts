import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GlobalDataService {
  private bg: string;
  constructor() {}
  
  setBg(val: string) {
    this.bg = val;
  }

  getBg(): string {
    return this.bg;
  }
 }
