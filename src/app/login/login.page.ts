import { Component, OnInit, ViewChild } from '@angular/core';
//
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController, AngularDelegate, Platform } from '@ionic/angular';
import { Button, $ } from 'protractor';
import { StatusBar } from '@ionic-native/status-bar/ngx';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';

let tipe = '';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  define1 = 1;
  define2 = 0;
  define3 = 0;
  define4 = 0;
  user = '';
  pass = '';
  cpass = '';
  name = '';
  word = '';
  data: any = {};

  constructor(
    private authService: AuthenticationService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private http: HttpClient,
    private platform: Platform,
    private statusBar: StatusBar
  ) {}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(true);
    });
  }

  ngOnInit() {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.data = {};
  }

  async getData(fun) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    // tslint:disable-next-line: no-unused-expression
    fun;
    loading.dismiss();
  }

  async falseData(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['Ok'],
    });
    await alert.present();
    return;
  }

  onLogin(form: NgForm) {
    this.user = form.value.name;
    this.pass = form.value.pass;
    tipe = 'login.php';
    this.logingIn();
  }

  logingIn() {
    if (this.user.length === 0 || this.pass.length === 0) {
      const msg = 'Masukkan Username dan Password!';
      this.falseData(msg);
      return;
    }
    const postData = JSON.stringify({username: this.user, password: this.pass, user: 'kabim'});

    this.http.post(goToHttp + tipe, postData).subscribe(data => {
      this.data = data;
      if (!this.data.error) {
        this.authService.login(this.data);
      } else {
        this.falseData(this.data.error.text);
      }
    });
  }

}
