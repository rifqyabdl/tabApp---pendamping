import { Component, ViewChild } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';
let tipe = '';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('content') private content: any;

  user = '';
  img: any;
  newAgenda: any;
  ads: any;

  sliderConf = {
    spaceBetween: -22,
    centeredSlides: true,
    slidesPreview: 1.6,
    loop: true,
    autoplay: true
  };

  menu = [
    [
      { title2: 'Tentang PKKMB', route: 'tabs/tentang', type: 'btn', custom: 'assets/icon/custom/pkkmb-1.svg'}
    ],
    [
      { name: 'book', title: 'Panduan', route: 'tabs/panduan', type: 'btn' },
      { name: 'globe', title: 'Website', route: 'tabs/web', type: 'btn' }
    ],
    [
      { name: 'clipboard', title2: 'Presensi', route: 'tabs/presensi', type: 'btn' }
    ],
    [
      { name: 'people', title: 'Grup', route: 'tabs/grup', type: 'btn' },
      { name: 'bookmarks', title: 'Agenda', route: 'tabs/agenda', type: 'btn' },
      { name: 'pin', title: 'Lokasi', route: 'https://www.google.com/maps/place/Universitas+Sebelas+Maret,+Jl.+Ir+Sutami+No.36+A,+Pucangsawit,+Kec.+Jebres,+Kota+Surakarta,+Jawa+Tengah+57126/@-7.5596031,110.8565448,17z/data=!4m2!3m1!1s0x2e7a14234667a3fd:0xbda63b32997616ad', type: 'lnk' }
    ]
  ];

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
        const agenda = dataa;
        this.storage.set('USER_NEWAGENDA', agenda);
      } else {
        return;
      }
    }, err => {
      return;
    });
  }

  getAds() {
    const postDataa = JSON.stringify({ads: 'all'});
    tipe = 'iklan.php';

    this.http.post(goToHttp + tipe, postDataa).subscribe(resp => {
      if (resp) {
        this.ads = resp;
      } else {
        return;
      }
    }, err => {
      return;
    });
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private storage: Storage,
    private http: HttpClient
    ) {
      this.getAds();
      this.getNewestAgenda();
      this.storage.get('USER_INFO').then(res => {
        this.user = res.NIM_KABIM;
        this.img = res.FOTO;
      });
      this.storage.get('USER_NEWAGENDA').then(res => {
        this.newAgenda = res;
      }, err => { });
    }

  ionViewWillEnter() {
    this.content.scrollToTop(300);
    this.sliderConf.autoplay = true;
    this.sliderConf.loop = true;
  }

  ionViewDidEnter() {
    this.getKabar();
  }

  ionViewDidLeave() {
    this.sliderConf.autoplay = true;
    this.sliderConf.loop = true;
  }

  next(para) {
    this.authenticationService.isAuthenticated();
    this.router.navigate([para]);
  }

}
