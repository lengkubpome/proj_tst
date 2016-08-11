import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: '../app/navbar.component.html',
//   styleUrls: ['navbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
