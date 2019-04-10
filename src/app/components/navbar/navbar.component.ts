import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'Mamaya Travel';
  options = {};

  constructor() {}

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.sidenav');
      const instances = M.Sidenav.init(elems, this.options);
    });
  }
}
