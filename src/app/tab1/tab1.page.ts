import { Component } from '@angular/core';
import { Miembro } from '../models/miembro';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  

  constructor(public miembro1 : Miembro) {
    this.miembro1 = new Miembro();
  }

  ngOnInit() {
    console.log(this.miembro1.miembro);
  }
}