import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/searchPage/searchPage';
import { SearchResultPage } from '../pages/searchResultPage/searchResultPage';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    SearchResultPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    SearchResultPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
