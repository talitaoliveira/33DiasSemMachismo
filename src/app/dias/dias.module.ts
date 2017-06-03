import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiasComponent } from './dias.component';
import { DiasService } from './dias.service';
import { MenuDiasComponent } from './menu-dias/menu-dias.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DiasComponent
  ],
  providers: [
    DiasService
  ],
  declarations: [DiasComponent, MenuDiasComponent]
})
export class DiasModule { }
