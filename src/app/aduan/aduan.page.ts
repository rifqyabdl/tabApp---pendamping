import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-aduan',
  templateUrl: './aduan.page.html',
  styleUrls: ['./aduan.page.scss'],
})

export class AduanPage implements OnInit {

  isiEmail: string = '';
  subject: string = '';
  

  constructor(private emailComposer: EmailComposer) {}

  send(){
     let email = {
       to: 'mostoplesam@gmail.com',
       subject: this.subject,
       body: this.isiEmail,
       isHtml: true
     }
     
     this.emailComposer.open(email);

  }

  ngOnInit(){

  }


}
