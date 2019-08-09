import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-aduan',
  templateUrl: './aduan.page.html',
  styleUrls: ['./aduan.page.scss'],
})

export class AduanPage implements OnInit {

  isiEmail: string = '';
  isiEmail2: string = '';
  subject: string = '';
  
  define1 = 1;
  define2 = 0;
  namae = '';
  ide = '';
  prodie = '';
  fakultase = '';
  user = '';
  
  model = '' 
  deviceID = '' 
  deviceVersion = '' 
  
  
  platformStr: String[] = ['undefined','undefined','undefined'];

  constructor(private emailComposer: EmailComposer, private device: Device, private platform : Platform, private storage: Storage) {
	  this.storage.get('USER_INFO').then(res => {
        this.namae = '<br>' + 'Nama : ' + res.NAMA_PESERTA;
        this.user = '<br>' + 'ID Peserta : ' + res.ID_PESERTA;
        this.prodie = '<br>' + 'Prodi : ' + res.PRODI_PESERTA;
        this.fakultase = '<br>' + 'Fakultas : ' + res.FAKULTAS_PESERTA;
        
      });
	  
    this.platformStr = platform.platforms();
	this.platformStr[0] = '<br>' + 'Platform : ' + this.platformStr[0];
	this.model = '<br>' + 'Model : ' + device.model;
	this.deviceVersion = '<br>' + 'Device Version : ' + device.version; 
	
  }
  

  send(){
	 
	 this.isiEmail2 = this.isiEmail + "<br>" + this.namae + this.user + this.ide + this.prodie + this.fakultase  +  this.platformStr[0] + this.model + this.deviceVersion;
	 
	  
     let email = {
       to: 'purwabrata@gmail.com',
       subject: this.subject,
       body: this.isiEmail2,
       isHtml: true
     }
     
     this.emailComposer.open(email);

  }

  ngOnInit(){
    
  }


}
