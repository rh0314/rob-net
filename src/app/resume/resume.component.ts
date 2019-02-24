import { Component, OnInit, Renderer2 } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { GlobalFunctionsService } from '../shared/global-functions.service';
import { GlobalDataService } from '../shared/global-data.service';
import { RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  pdfViewer: Element;
  showAll: true;
  zoomLevel: number = 1;
  zbtOffset = 320;
  savedZoom: number = 1;

  constructor(private global: GlobalDataService,
    private globalFunctions: GlobalFunctionsService
  ) { }

  ngOnInit() {
    window.addEventListener('resize', e => {
      this.moveButtons();
    });
    window.addEventListener('scroll', e => {
      this.moveButtons();
    });
    this.moveButtons();
    this.globalFunctions.swapClass('resumePage', 'page-in', 'page-out', 500);
  }

  ngOnDestroy() {
    this.globalFunctions.swapClass('resumePage', 'page-out', 'page-in');
  }

  moveButtons() {
    const btns = document.getElementById('zoomBtnHolder');
    const anchor = document.getElementById('pdfAnchor');
    const wrapper = document.getElementById('contentWrapper');
    const ct = wrapper ? wrapper.getBoundingClientRect().top : 0;
    const am = anchor ? anchor.getBoundingClientRect().right - ((anchor.getBoundingClientRect().right - anchor.getBoundingClientRect().left) / 2) : 0;
    const at = anchor ? anchor.getBoundingClientRect().top : 0;
    const bw = btns ? btns.getBoundingClientRect().width : 0;
    const zbt = this.zbtOffset - at;
    const zbl = am - (bw * .5);
    const wh = window.innerHeight;
    const ww = window.innerWidth;
    const y = window.scrollY;
    if (y < 200 && btns) {
      btns.style.top = zbt + 'px';
      btns.style.left = zbl + 'px';
    }
    else {
      
    }
  }

  zoomUp(up: boolean) {
    this.zoomLevel = this.zoomLevel + .1 * (up ? 1 : -1);
  }

  afterLoadComplete(pdfData: any) {
    // console.log('pdfData', pdfData);
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;

  }

  nextPage() {
    this.pdfViewer = document.getElementById('pdfViewerContainer');
    this.page++;
    this.pdfViewer.scrollTop = 0;
  }

  prevPage() {
    this.pdfViewer = document.getElementById('pdfViewerContainer');
    this.page--;
    this.pdfViewer.scrollTop = 0;
  }

  pageRenderedI(e) {
    console.log('pageRendered: ', e);
  }
}