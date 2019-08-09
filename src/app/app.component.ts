import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';
let tipe = '';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
  data: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authenticationService: AuthenticationService,
    private headerColor: HeaderColor,
    private http: HttpClient,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleBlackTranslucent();
      this.headerColor.tint('#6F76B7');
      this.splashScreen.hide();

      this.authenticationService.authState.subscribe(state => {
        if (state) {
          this.getNewestAgenda();
          this.router.navigate(['']);
          this.getKabar();
        } else {
          this.router.navigate(['/login']);
        }
      });
    });
  }

  getKabar() {
    const postData = JSON.stringify({kabar: 'all'});
    tipe = 'kabar.php';

    this.http.post(goToHttp + tipe, postData).subscribe(data => {
      if (data) {
        const kabar = data;
        this.storage.set('USER_KABAR', kabar);
      } else {
        return;
      }
    }, err => {
      return;
    });
  }

  getNewestAgenda() {
    const postDataa = JSON.stringify({agenda0: '0', agenda1: '1'});
    tipe = 'newestAgenda.php';

    this.http.post(goToHttp + tipe, postDataa).subscribe(dataa => {
      if (dataa) {
        this.data = dataa;
        this.storage.set('USER_NEWAGENDA', this.data);
      } else {
        return;
      }
    }, err => {
      return;
    });
  }
}
