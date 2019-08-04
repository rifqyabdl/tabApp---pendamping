import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState = new BehaviorSubject(false);

  nama = '';
  id = '';
  prodi = '';
  fakultas = '';
  grup = '';

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController,
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  setAgenda(agenda) {
    this.storage.set('USER_AGENDA', agenda).then(() => {
      //
    });
  }

  setUserinfo(para) {
    // tambahin set nama, ID, grup, dll
    this.nama = para.NAMA_KABIM;
    this.id = para.NIM_KABIM;
    this.prodi = para.PRODI_KABIM;
    this.fakultas = para.FAKULTAS_KABIM;
    this.grup = para.ID_GROUP;
  }

  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response === null) {
        return;
      } else {
        this.setUserinfo(response);
        this.authState.next(true);
      }
    });
  }

  login(userinfo) {
    this.storage.set('USER_INFO', userinfo).then(() => {
      this.setUserinfo(userinfo);
      this.router.navigate(['tabs']);
      this.authState.next(true);
    });
  }

  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.storage.clear();
      this.router.navigate(['']);
      this.authState.next(false);
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }

}
