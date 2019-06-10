import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MusicContentComponent } from './components/music-content/music-content.component';
import { UserContentComponent } from './components/user-content/user-content.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'perfil',
    component: ProfileComponent,
    canActivate: [AuthGuardGuard]
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
    component: FileUploadComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
