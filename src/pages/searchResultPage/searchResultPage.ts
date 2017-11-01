import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-searchResultPage',
  templateUrl: 'searchResultPage.html'
})
export class SearchResultPage {
  pnr: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pnr = navParams.get('pnr');
  }
}
