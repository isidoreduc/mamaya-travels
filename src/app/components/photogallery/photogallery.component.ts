import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss']
})
export class PhotogalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // init materialbox
    document.addEventListener('DOMContentLoaded', function () {
      const elems = document.querySelectorAll('.materialboxed');
      const instances = M.Materialbox.init(elems, this.options);
    });
  }

}
