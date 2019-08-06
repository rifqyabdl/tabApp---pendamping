import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  public line = [
    { val: 'Udah sampai di Solo?', isChecked: true },
  ];

  public line1 = [
    { val: 'Sambara!', isChecked: true },
  ];

  public line2 = [
    { val: 'Sambara lagi!', isChecked: true },
  ];

  public form = [
    { val: 'Upacara Pelantikan', isChecked: false },
    { val: 'Kuliah Umum', isChecked: false },
  ];

  public forms = [
    { val: 'Kuliah Umum', isChecked: false },
  ];

  public form1 = [
    { val: 'Have fun!', isChecked: false },
  ];

  public form2 = [
    { val: 'Upacara HUT RI', isChecked: false },
    { val: 'Kuliah Umum', isChecked: false },
    { val: 'Motivasi ESQ', isChecked: false },
  ];

  public form3 = [
    { val: 'Student Vaganza', isChecked: false },
  ];

  constructor() { }

  ngOnInit() { }

}
