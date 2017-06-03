import { Component, OnInit } from '@angular/core';

import { DiasService } from './dias.service';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent implements OnInit {

  //childTitle:string = 'This text is passed to child';

  hashTag: string = '';
  dias;
  cores;
  cor;

  constructor(private diasService: DiasService) { 

    this.hashTag = '#33DiasSemMachismo';
    this.dias = this.diasService.getDias();
    this.cores = this.diasService.getCor();

   }

   pegaCor(){

     this.cor = this.cores[Math.floor(Math.random() * this.cores.length)];
     
     return this.cor;

   }

  ngOnInit() {
  }

}
