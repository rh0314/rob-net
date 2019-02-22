import { Component, OnInit, Renderer2 } from '@angular/core';
import { DecimalPipe } from '@angular/common';

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

  ngOnInit() {
    window.addEventListener('resize', e => {
      this.moveButtons();
    });
    window.addEventListener('scroll', e => {
      this.moveButtons();
    });
    this.moveButtons();
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
    if (btns) {
      btns.style.top = zbt + 'px';
      btns.style.left = zbl + 'px';
      console.log('btns', btns.getBoundingClientRect(), 'pdfAnchor" ', anchor.getBoundingClientRect(), 'at', at, 'zbt', zbt, 'ct', ct);
    }
  }

  zoomUp(up: boolean) {
    this.zoomLevel = this.zoomLevel + .1 * (up ? 1 : -1);
  }

  afterLoadComplete(pdfData: any) {
    console.log('pdfData', pdfData);
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;

  }

  nextPage() {
    this.pdfViewer = document.getElementById('pdf-viewer-container');
    this.page++;
    this.pdfViewer.scrollTop = 0;
  }

  prevPage() {
    this.pdfViewer = document.getElementById('pdf-viewer-container');
    this.page--;
    this.pdfViewer.scrollTop = 0;
  }

  pageRenderedI(e) {
    console.log('pageRendered: ', e);
  }
}