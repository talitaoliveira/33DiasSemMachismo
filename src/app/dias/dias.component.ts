import { Component, OnInit } from '@angular/core';

import { DiasService } from './dias.service';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent implements OnInit {

  hashTag: string = '';
  nomeCampanha: string = '';
  dias: any[];
  imagensBgFrases: string[];
  nameDay: string = '';

  imagemBgInicio: string = '';

  imagens33: string[];

  constructor(private diasService: DiasService) {

    this.nameDay = 'dia';
    this.hashTag = '#33DiasSemMachismo';
    this.nomeCampanha = '33DiasSemMachismo';
    this.dias = this.diasService.getDias();
    this.imagemBgInicio = 'assets/images/bg-inicio.jpeg';

    this.imagensBgFrases = this.diasService.getBackgrounds();

    console.log(this.imagensBgFrases);

  }

  mudaLinguagem(language) {

    if (language === 'PT') {
      this.dias = this.diasService.getDias();
      this.hashTag = '#33DiasSemMachismo';
      this.nomeCampanha = '33DiasSemMachismo';
      this.nameDay = 'dia';

    } else {
      this.dias = this.diasService.getDiasIngles();
      this.hashTag = '#33DaysWithoutMachismo';
      this.nomeCampanha = '33DaysWithoutMachismo';
      this.nameDay = 'day';
    }

  }

  ngOnInit() {
  }

}
