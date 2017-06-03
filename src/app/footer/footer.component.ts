import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  githubDev: string = "https://github.com/talitaoliveira";
  nameDev: string = "Talita Oliveira";
  facebookContentSource: string = "https://www.facebook.com/33DiasSemMachismo";
  nameContentSource: string = "33DiasSemMachismo";

  year: string = "2017";

  constructor() { }

  ngOnInit() {
  }

}
