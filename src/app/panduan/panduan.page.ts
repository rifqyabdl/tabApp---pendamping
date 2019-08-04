import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { PDM } from './panduan.model';


@Component({
  selector: 'app-panduan',
  templateUrl: './panduan.page.html',
  styleUrls: ['./panduan.page.scss'],
})
export class PanduanPage implements OnInit {
  pdmMaba: PDM[] = [
    {
      bab : '',
      icon : '',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj']
    },
    {
      bab : '',
      icon : '',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj']
    }
  ];

  pdmKambing: PDM[] = [
    {
      bab : '',
      icon : '',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj']
    },
    {
      bab : '',
      icon : '',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj']
    }
  ];


  @ViewChild('slides') slider: IonSlides;
  segment = 0;

  choice: string = 'pilihan';

  constructor() { }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  ngOnInit() {
  }

  changeState(pilihan: number) {
    if (pilihan === 1) {
      this.choice = 'maba';
    } else if (pilihan === 2) {
      this.choice = 'kambing';
    }

  }

}
