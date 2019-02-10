import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  ngOnInit() {

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