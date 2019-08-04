import { Component } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';

const goToHttp = 'https://purwabarata2019.uns.ac.id/panerusApp/';
let tipe = '';
let grup = '';

@Component({
  selector: 'app-grup',
  templateUrl: 'grup.page.html',
  styleUrls: ['grup.page.scss'],
})
export class GrupPage {

  dataa: any = [];

  constructor(
    public loadingController: LoadingController,
    private http: HttpClient,
    private authService: AuthenticationService,
    private alertController: AlertController
    ) {
  }

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
      this.falseData(err);
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

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    tipe = 'getGroup.php';
    grup = this.authService.grup;
    this.getData();
  }

}
