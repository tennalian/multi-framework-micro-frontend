import { Component, OnInit } from '@angular/core';

declare const require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'mfe1';

  ngVersion = require('../../package.json').dependencies['@angular/core'];

  constructor() { }

  ngOnInit(): void {  }
}
