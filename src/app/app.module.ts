
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { MdbTakiModule } from './mdb-taki.module';
import { CardsComponent } from './components/Inicio/cards/cards.component';
import { AppRoutingModule } from './app-routing.module';
import { CarrouselComponent } from './components/inicio/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CarrouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
// tslint:disable-next-line: deprecation
    HttpModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'Your_api_key'
    }),
    MdbTakiModule,
    AppRoutingModule
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
