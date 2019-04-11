import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  options = { indicators: false, height: 600 };
  constructor() {}

  ngOnInit() {
    // initialize the slider
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.slider');
      const instances = M.Slider.init(elems, this.options);
    });
  }
}
