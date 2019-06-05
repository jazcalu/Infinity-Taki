import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MusicContentComponent } from './components/music-content/music-content.component';
import { UserContentComponent } from './components/user-content/user-content.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'perfil',
    component: ProfileComponent
  },
  {
    path: 'tops',
    component: MusicContentComponent
  },
  {
    path: 'news',
    component: UserContentComponent
  },
  {
    path: 'upload',
    component: FileUploadComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
