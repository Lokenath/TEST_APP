import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

//Rail API Key: 7gib32d29m
//Weather KEY: 07ff7bcf1fb58a38b63096828eefb058


@Component({
  selector: 'page-searchResultPage',
  templateUrl: 'searchResultPage.html'
})
export class SearchResultPage {
  pnr: string;
  apiKey: string = "7gib32d29m";
  url: string;
  monthArr: Array<string> = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  searchResultData: any = {
          "response_code": 200,
          "debit": 3,
          "pnr": "1234567890",
          "doj": "25-6-2017",
          "total_passengers": 3,
          "chart_prepared": false,
          "from_station": {
            "name": "Kopargaon",
            "code": "KPG"
          },
          "to_station": {
            "name": "Hazrat Nizamuddin",
            "code": "NZM"
          },
          "boarding_point": {
            "name": "Kopargaon",
            "code": "KPG"
          },
          "reservation_upto": {
            "name": "Hazrat Nizamuddin",
            "code": "NZM"
          },
          "train": {
            "name": "GOA EXPRESS",
            "number": "12779"
          },
          "journey_class": {
            "name": "SLEEPER CLASS",
            "code": "SL"
          },
          "passengers": [
            {
              "no": 1,
              "coach_position": 0,
              "current_status": "RLWL/11",
              "booking_status": "RLWL/39/GN"
            },
            {
              "no": 2,
              "coach_position": 0,
              "current_status": "RLWL/12",
              "booking_status": "RLWL/40/GN"
            },
            {
              "no": 3,
              "coach_position": 0,
              "current_status": "RLWL/13",
              "booking_status": "RLWL/41/GN"
            }
          ]
      };

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.pnr = navParams.get('pnr');
    this.url = "http://api.railwayapi.com/v2/pnr-status/pnr/"+this.pnr+"/apikey/"+this.apiKey+"/";
    
    this.http.get(this.url)
        .map(res => res.json())
        .subscribe(
                data => {
                    console.log("IN success");
                    //this.searchResultData = data;
                },
                err => {
                    console.log("Error !");
                }
        );
  }
  
  
}
