import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';
const tipe = 'absensi1.php';

@Component({
  selector: 'app-presensi',
  templateUrl: './presensi.page.html',
  styleUrls: ['./presensi.page.scss'],
})
export class PresensiPage implements OnInit {
  createdCode = null;
  agend = '';
  data: any = {};

  createCode(para) {
    this.createdCode = para;
  }

  updateAgenda() {
    const postData = JSON.stringify({userReq: '1'});
    this.http.post(goToHttp + tipe, postData).subscribe(data => {
      this.data = data;
      if (!this.data.error) {
        this.authService.setAgenda(this.data);
        this.storage.get('USER_INFO').then((res) => {
          this.agend = this.data.NAMA_AGENDA;
          let papa = res.ID_GROUP + '|' + res.ID_KABIM + '|' + this.data.ID_AGENDA;
          papa = btoa(btoa(papa));
          this.createCode(papa);
        });
      } else {
        this.agend = this.data.error.text;
      }
    });
  }

  constructor(private storage: Storage, private router: Router, private http: HttpClient, private authService: AuthenticationService) { }

  ngOnInit() {
    this.storage.get('USER_AGENDA').then((response) => {
      if (response) {
        this.agend = response.NAMA_AGENDA;
        this.storage.get('USER_INFO').then((res) => {
          let papa = res.ID_GROUP + '|' + res.ID_KABIM + '|' + response.ID_AGENDA;
          papa = btoa(btoa(papa));
          this.createCode(papa);
        });
      } else {
        this.updateAgenda();
      }
    });
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.agend = '';
    this.createdCode = null;
  }

  addNote() {
    this.authService.isAuthenticated();
    this.router.navigate(['tabs/presensi/note']);
  }

}
