import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page2 } from '../page2/page2';

@Component({
  selector: 'page-SearchPage',
  templateUrl: 'SearchPage.html'
})
export class SearchPage {

  constructor(private navCtrl: NavController, navParams: NavParams) {
    
  }
  navigateToResultPage(){
      this.navCtrl.push(Page2, {});
  }
}
