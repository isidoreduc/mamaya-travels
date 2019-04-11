import { Component, OnInit } from '@angular/core';
import * as M from '../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  options = {};

  ngOnInit(): void {
    // init materialbox
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.materialboxed');
      const instances = M.Materialbox.init(elems, this.options);
    });
  }
}
