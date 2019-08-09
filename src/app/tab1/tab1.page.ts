import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  refresher = document.getElementById('refresher');
  list = document.getElementById('list');
  kabar: any;

  constructor(private storage: Storage, private http: HttpClient) {
    this.storage.get('USER_KABAR').then(res => {
      this.kabar = res;
    }, err => {
      return;
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getKabarManual();
      this.storage.get('USER_KABAR').then(res => {
        this.kabar = res;
        event.target.complete();
      }, err => {
        return;
      });
      event.target.complete();
    }, 5000);
  }

  getKabarManual() {
    const postDataa = JSON.stringify({kabar: 'all'});
    const tipe = 'kabar.php';

    this.http.post(goToHttp + tipe, postDataa).subscribe(dataa => {
      if (dataa) {
        this.storage.set('USER_KABAR', dataa);
      } else {
        return;
      }
    }, err => {
      return;
    });
  }

}
