import { Component, OnInit } from '@angular/core';

import { DiasService } from './dias.service';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent implements OnInit {

  hashTag: string = '';
  dias;
  cores;
  cor;
  nameDay: string = 'DIA';

  constructor(private diasService: DiasService) {

    this.hashTag = '#33DiasSemMachismo';
    this.dias = this.diasService.getDias();

  }

  mudaLinguagem(language) {

    if (language === 'PT') {
      this.dias = this.diasService.getDias();
      this.hashTag = '#33DiasSemMachismo';
      this.nameDay = 'DIA';
    } else {
      this.dias = this.diasService.getDiasIngles();
      this.hashTag = '#33DaysWithoutMachismo';
      this.nameDay = 'DAY';
    }

  }

  ngOnInit() {
  }

}
