import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from './../shared/global-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private global: GlobalDataService) { }

  ngOnInit() {
  }


}
