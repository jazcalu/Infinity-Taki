import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
