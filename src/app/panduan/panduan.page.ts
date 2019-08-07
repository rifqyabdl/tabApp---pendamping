import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { PDM } from './panduan.model';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-panduan',
  templateUrl: './panduan.page.html',
  styleUrls: ['./panduan.page.scss'],
})




export class PanduanPage implements OnInit {
  posY : any = 0;
  entity : any;
  posYMaba : number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  posYKambing : number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  state : boolean = false;
  

  @ViewChild('content') content;
  @ViewChild('content2') content2;
  
  @ViewChild('maba1') maba1;
  @ViewChild('maba2') maba2;
  @ViewChild('maba3') maba3;
  @ViewChild('maba4') maba4;
  @ViewChild('maba5') maba5;
  @ViewChild('maba6') maba6;
  @ViewChild('maba7') maba7;
  @ViewChild('maba8') maba8;
  @ViewChild('maba9') maba9;
  @ViewChild('maba10') maba10;
  @ViewChild('maba11') maba11;
  @ViewChild('maba12') maba12;
  @ViewChild('maba13') maba13;
  @ViewChild('maba14') maba14;
  @ViewChild('maba15') maba15;
  @ViewChild('maba16') maba16;
  @ViewChild('maba17') maba17;
  @ViewChild('maba18') maba18;
  @ViewChild('maba19') maba19;
  @ViewChild('maba20') maba20;
  @ViewChild('maba21') maba21;
  @ViewChild('maba22') maba22;
  @ViewChild('maba23') maba23;
  @ViewChild('maba24') maba24;
  @ViewChild('maba25') maba25;
  @ViewChild('maba26') maba26;
  @ViewChild('maba27') maba27;
  @ViewChild('maba28') maba28;
  @ViewChild('maba29') maba29;
  @ViewChild('maba30') maba30;
  @ViewChild('maba31') maba31;
  @ViewChild('maba32') maba32;
  @ViewChild('maba33') maba33;
  @ViewChild('maba34') maba34;
  @ViewChild('maba35') maba35;
  @ViewChild('maba36') maba36;
  @ViewChild('maba37') maba37;
  @ViewChild('maba38') maba38;
  @ViewChild('maba39') maba39;
  @ViewChild('maba40') maba40;
  @ViewChild('maba41') maba41;
  @ViewChild('maba42') maba42;
  @ViewChild('maba43') maba43;
  @ViewChild('maba44') maba44;
  @ViewChild('maba45') maba45;
  @ViewChild('maba46') maba46;
  @ViewChild('maba47') maba47;
  @ViewChild('maba48') maba48;
  @ViewChild('maba49') maba49;
  @ViewChild('maba50') maba50;
  @ViewChild('maba51') maba51;
  @ViewChild('maba52') maba52;
  @ViewChild('maba53') maba53;
  @ViewChild('maba54') maba54;
  @ViewChild('maba55') maba55;
  @ViewChild('maba56') maba56;
  @ViewChild('maba57') maba57;
  @ViewChild('maba58') maba58;
  @ViewChild('maba59') maba59;
  @ViewChild('maba59') maba60;
  
  @ViewChild('kambing1') kambing1;
  @ViewChild('kambing2') kambing2;
  @ViewChild('kambing3') kambing3;
  @ViewChild('kambing4') kambing4;
  @ViewChild('kambing5') kambing5;
  @ViewChild('kambing6') kambing6;
  @ViewChild('kambing7') kambing7;
  @ViewChild('kambing8') kambing8;
  @ViewChild('kambing9') kambing9;
  @ViewChild('kambing10') kambing10;
  @ViewChild('kambing11') kambing11;
  @ViewChild('kambing12') kambing12;
  @ViewChild('kambing13') kambing13;
  @ViewChild('kambing14') kambing14;
  @ViewChild('kambing15') kambing15;
  @ViewChild('kambing16') kambing16;
  @ViewChild('kambing17') kambing17;
  @ViewChild('kambing18') kambing18;
  @ViewChild('kambing19') kambing19;
  @ViewChild('kambing20') kambing20;
  @ViewChild('kambing21') kambing21;
  @ViewChild('kambing22') kambing22;
  @ViewChild('kambing23') kambing23;
  @ViewChild('kambing24') kambing24;
  @ViewChild('kambing25') kambing25;
  @ViewChild('kambing26') kambing26;
  @ViewChild('kambing27') kambing27;
  @ViewChild('kambing28') kambing28;
  @ViewChild('kambing29') kambing29;
  @ViewChild('kambing30') kambing30;
  @ViewChild('kambing31') kambing31;
  @ViewChild('kambing32') kambing32;
  @ViewChild('kambing33') kambing33;
  @ViewChild('kambing34') kambing34;
  @ViewChild('kambing35') kambing35;
  @ViewChild('kambing36') kambing36;
  @ViewChild('kambing37') kambing37;
  @ViewChild('kambing38') kambing38;
  @ViewChild('kambing39') kambing39;
  @ViewChild('kambing40') kambing40;
  @ViewChild('kambing41') kambing41;
  @ViewChild('kambing42') kambing42;
  @ViewChild('kambing43') kambing43;
  @ViewChild('kambing44') kambing44;
  @ViewChild('kambing45') kambing45;
  @ViewChild('kambing46') kambing46;
  @ViewChild('kambing47') kambing47;
  @ViewChild('kambing48') kambing48;
  @ViewChild('kambing49') kambing49;
  @ViewChild('kambing50') kambing50;
  @ViewChild('kambing51') kambing51;
  @ViewChild('kambing52') kambing52;
  @ViewChild('kambing53') kambing53;
  @ViewChild('kambing54') kambing54;
  @ViewChild('kambing55') kambing55;
  @ViewChild('kambing56') kambing56;
  @ViewChild('kambing57') kambing57;
  @ViewChild('kambing58') kambing58;
  @ViewChild('kambing59') kambing59;
  @ViewChild('kambing59') kambing60;
  
  mabaArray : any[] = [this.maba1,this.maba2,this.maba3,this.maba4,this.maba5,this.maba6,this.maba7,this.maba8,this.maba9,this.maba10,this.maba11,this.maba12,this.maba12,this.maba13,this.maba14,this.maba15,this.maba16,this.maba17,this.maba18,this.maba19,this.maba20,this.maba21,this.maba22,this.maba22,this.maba23,this.maba24,this.maba25,this.maba26,this.maba27,this.maba28,this.maba29,this.maba30,this.maba31,this.maba32,this.maba32,this.maba33,this.maba34,this.maba35,this.maba36,this.maba37,this.maba38,this.maba39,this.maba40,this.maba41,this.maba42,this.maba42,this.maba43,this.maba44,this.maba45,this.maba46,this.maba47,this.maba48,this.maba49,this.maba50,this.maba51,this.maba52,this.maba52,this.maba53,this.maba54,this.maba55,this.maba56,this.maba57,this.maba58,this.maba59,this.maba60];
  kambingArray : any[] = [this.kambing1,this.kambing2,this.kambing3,this.kambing4,this.kambing5,this.kambing6,this.kambing7,this.kambing8,this.kambing9,this.kambing10,this.kambing11,this.kambing12,this.kambing12,this.kambing13,this.kambing14,this.kambing15,this.kambing16,this.kambing17,this.kambing18,this.kambing19,this.kambing20,this.kambing21,this.kambing22,this.kambing22,this.kambing23,this.kambing24,this.kambing25,this.kambing26,this.kambing27,this.kambing28,this.kambing29,this.kambing30,this.kambing31,this.kambing32,this.kambing32,this.kambing33,this.kambing34,this.kambing35,this.kambing36,this.kambing37,this.kambing38,this.kambing39,this.kambing40,this.kambing41,this.kambing42,this.kambing42,this.kambing43,this.kambing44,this.kambing45,this.kambing46,this.kambing47,this.kambing48,this.kambing49,this.kambing50,this.kambing51,this.kambing52,this.kambing52,this.kambing53,this.kambing54,this.kambing55,this.kambing56,this.kambing57,this.kambing58,this.kambing59,this.kambing60];
  pdmPos : any[] = [this.posYMaba, this.posYKambing];

  tinggi : any = 0;

  selecto(){
    console.log(this.maba1.nativeElement.getBoundingClientRect().y);
  }
  

  assignVal(){
    for(let i = 0; i < 60; i++){
      this.posYMaba[i] = this.maba1.nativeElement.getBoundingClientRect().height * i;
      this.posYKambing[i] = this.kambing1.nativeElement.getBoundingClientRect().height * i;
      // this.posYMaba[i] = this.mabaArray[i].nativeElement.getBoundingClientRect().y;
      // this.posYKambing[i] = this.kambingArray[i].nativeElement.getBoundingClientRect().y;
      
      //console.log(this.posYMaba[i]);
      //console.log(this.posYKambing[i]);
    }
    
    
  }

  firstUse(){
    if(this.state === false){
      //this.tinggi = this.maba2.nativeElement.getBoundingClientRect().y;
      this.mabaArray = [this.maba1,this.maba2,this.maba3,this.maba4,this.maba5,this.maba6,this.maba7,this.maba8,this.maba9,this.maba10,this.maba11,this.maba12,this.maba12,this.maba13,this.maba14,this.maba15,this.maba16,this.maba17,this.maba18,this.maba19,this.maba20,this.maba21,this.maba22,this.maba22,this.maba23,this.maba24,this.maba25,this.maba26,this.maba27,this.maba28,this.maba29,this.maba30,this.maba31,this.maba32,this.maba32,this.maba33,this.maba34,this.maba35,this.maba36,this.maba37,this.maba38,this.maba39,this.maba40,this.maba41,this.maba42,this.maba42,this.maba43,this.maba44,this.maba45,this.maba46,this.maba47,this.maba48,this.maba49,this.maba50,this.maba51,this.maba52,this.maba52,this.maba53,this.maba54,this.maba55,this.maba56,this.maba57,this.maba58,this.maba59,this.maba60];
      this.kambingArray = [this.kambing1,this.kambing2,this.kambing3,this.kambing4,this.kambing5,this.kambing6,this.kambing7,this.kambing8,this.kambing9,this.kambing10,this.kambing11,this.kambing12,this.kambing12,this.kambing13,this.kambing14,this.kambing15,this.kambing16,this.kambing17,this.kambing18,this.kambing19,this.kambing20,this.kambing21,this.kambing22,this.kambing22,this.kambing23,this.kambing24,this.kambing25,this.kambing26,this.kambing27,this.kambing28,this.kambing29,this.kambing30,this.kambing31,this.kambing32,this.kambing32,this.kambing33,this.kambing34,this.kambing35,this.kambing36,this.kambing37,this.kambing38,this.kambing39,this.kambing40,this.kambing41,this.kambing42,this.kambing42,this.kambing43,this.kambing44,this.kambing45,this.kambing46,this.kambing47,this.kambing48,this.kambing49,this.kambing50,this.kambing51,this.kambing52,this.kambing52,this.kambing53,this.kambing54,this.kambing55,this.kambing56,this.kambing57,this.kambing58,this.kambing59,this.kambing60];
  
      this.assignVal();
      this.pdmPos = [this.posYMaba, this.posYKambing];
      this.state = true;
      console.log(this.posYMaba[19]);
    }
  }

  ScrollToPoint(choosein : number, chooseent : number){
    choosein = choosein - 1;
	if(chooseent === 0){
		this.content.scrollToPoint(0,this.pdmPos[chooseent][choosein],100);
	}else {
		this.content2.scrollToPoint(0,this.pdmPos[chooseent][choosein],100);
	}
    
  }
  
  pdmMaba: PDM[] = [
    {
      bab : '',
      icon : '',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj'],
      color : 'dark'
    },
    {
      bab : '',
      icon : '',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj'],
      color : 'none'
    }
    
  ];

  pdmKambing: PDM[] = [
    {
      bab : 'Pakaian',
      icon : 'menu',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj'],
      color : 'light'
    },
    {
      bab : 'Etika',
      icon : 'menu',
      page : 1,
      content : ['jaja', 'ahha', 'jajaj'],
      color : 'none'
    }
  ];


  @ViewChild('slides') slider: IonSlides;
  segment = 0;
  
  

  choice: number = 1;
  menua: any;

  constructor(private menu: MenuController) { 
    this.menua = menu;
	
    
  }
  
  ngAfterViewInit() {
    this.slider.lockSwipes(true);
  }

  async segmentChanged() {
	this.slider.lockSwipes(false);
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
	this.slider.lockSwipes(true);
	if(this.segment == 0){
		this.choice = 1;
	}else{
		this.choice = 2;
	}
  }

  ngOnInit() {
  }

  changeState(pilihan: number) {
    if (pilihan === 1) {
      this.choice = 1;
    } else if (pilihan === 2) {
      this.choice = 2;
    }

  }

  toggleMenu() {
    this.menua.toggle('right');
  }

  

}
