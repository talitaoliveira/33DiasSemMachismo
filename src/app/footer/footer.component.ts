import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  siteDev: string = "https://github.com/talitaoliveira";
  siteDesign: string = "https://www.behance.net/phillipeburgos";
  nameDev: string = "Talita Oliveira";
  nameDesign: string = "Phillipe Burgos";
  facebookContentSource: string = "https://www.facebook.com/33DiasSemMachismo";
  nameContentSource: string = "33DiasSemMachismo";

  year: string = "2017";

  constructor() { }

  ngOnInit() {
  }

}
