import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchResultPage } from '../searchResultPage/searchResultPage';

//API Key: 7gib32d29m

@Component({
  selector: 'page-SearchPage',
  templateUrl: 'SearchPage.html'
})
export class SearchPage {
  searchedPnr : any;
  disabled : boolean;

  constructor(private navCtrl: NavController, navParams: NavParams) {
     this.searchedPnr = "";
     this.disabled = true;
  }
  onPnrType(ev){
      if(ev.target.value.length == 10){
          this.disabled = false;
      }
      else{
          this.disabled = true;
      }
  }
  navigateToResultPage(){
      this.navCtrl.push(SearchResultPage, {pnr: this.searchedPnr});
  }
}
