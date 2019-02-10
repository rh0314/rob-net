import { Component, OnInit, Inject,  } from '@angular/core';
import { Router, Route, ActivatedRoute, Params, Data } from '@angular/router';
import { GlobalDataService } from '../shared/global-data.service';
import { DOCUMENT, NgForOf } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Array<string>;
  techs: Array<string>;
  subtechs: Array<string>;
  card1in = false;

  constructor(
    @Inject(DOCUMENT) document, 
    private router: Router, 
    private route: ActivatedRoute, 
    private global: GlobalDataService
    ) { }

  ngOnInit() {
    this.items = [
      "Custom Application Development",
      "Database Driven Applications", 
      "Web-Based Tools",
      "Delightful, Intuitive User Experience",
      "Data transformation"
    ];
    this.techs = [
      "ASP.NET",
      "JavaScript Frameworks",
      "Relational Databases"
    ];
    this.subtechs = [
      "Angular (2+)",
      "AngularJS",
      "ReactJS", 
      "JQuery",
      "NodeJS",
      "C#",
      "VB.NET",
      "HTML/HTML5",
      "CSS",
      "Bootstrap",
      "SQL", 
    ];

  }


}
