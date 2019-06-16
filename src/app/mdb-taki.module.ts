import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// For MDB Angular Pro
import { SidenavModule, NavbarModule, WavesModule, AccordionModule } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidenavModule, NavbarModule, WavesModule, AccordionModule,

  ],
  exports: [
    SidenavModule, NavbarModule, WavesModule, AccordionModule
  ]

})
export class MdbTakiModule { }
