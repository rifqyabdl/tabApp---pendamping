import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';
let tipe = '';
let grup = '';
let kabim = '';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  dataa: any = [];

  async getData() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    const postData = JSON.stringify({idGroup: grup});

    this.http.post(goToHttp + tipe, postData).subscribe(data => {
      this.dataa = data;
      if (!this.dataa.error) {
        loading.dismiss();
      } else {
        loading.dismiss();
        this.falseData(this.dataa.error.text);
      }
    }, err => {
      loading.dismiss();
      this.falseData('Koneksi ke server gagal');
    });
  }

  async falseData(msg) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['Ok'],
    });
    await alert.present();
    return;
  }

  async showNote(id, nama) {
    const choose = await this.alertController.create({
      header: nama,
      message: 'Beri alasan ketidakhadiran',
      inputs: [
        {
          name: 'reas',
          placeholder: 'Beri deskripsi singkat..'
        }
      ],
      buttons: [
        {
          text: 'Batal',
          handler: data => { this.alertController.dismiss(); }
        },
        {
          text: 'Kirim',
          handler: data => { this.sendNote(id, data); }
        }
      ]
    });
    await choose.present();
  }

  sendNote(id, data) {
    tipe = 'sendNote.php';
    this.storage.get('USER_AGENDA').then(res => {
      const agenda = res.ID_AGENDA;

      const postData = JSON.stringify({idPeserta: id, idAgenda: agenda, idKabim: kabim, alasan: data.reas});
      this.http.post(goToHttp + tipe, postData).subscribe(response => {
        if (response) {
          this.falseData('Berhasil terkirim');
        } else {
          this.falseData('Gagal mengirim');
        }
      }, err => {
        this.falseData('Koneksi ke server gagal');
      });
    }, err => {
        this.falseData('ID Grup tidak diketahui. Coba restart aplikasi.');
    });
  }

  constructor(
    private http: HttpClient,
    public loadingController: LoadingController,
    private alertController: AlertController,
    private storage: Storage,
    ) { }

  ngOnInit() {
    tipe = 'getGroup.php';
    this.storage.get('USER_INFO').then(res => {
      grup = res.ID_GROUP;
    });
    this.getData();
    this.storage.get('USER_INFO').then(res => {
      kabim = res.ID_KABIM;
    });
  }

}
