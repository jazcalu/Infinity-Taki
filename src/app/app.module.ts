import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { MdbTakiModule } from './mdb-taki.module';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { LoginComponent } from './components/header/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CarouselComponent } from './components/main-page/carousel/carousel.component';
import { NewMusicComponent } from './components/main-page/new-music/new-music.component';
import { NewEventsComponent } from './components/main-page/new-events/new-events.component';
import { RegisterComponent } from './components/register/register.component';
import { UserContentComponent } from './components/user-content/user-content.component';
import { OldPostComponent } from './components/user-content/old-post/old-post.component';
import { NewPostComponent } from './components/user-content/new-post/new-post.component';
import { RightsideNewsComponent } from './components/user-content/rightside-news/rightside-news.component';
import { MusicContentComponent } from './components/music-content/music-content.component';
import { FeaturedComponent } from './components/music-content/featured/featured.component';
import { TopComponent } from './components/music-content/top/top.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CoverComponent } from './components/profile/cover/cover.component';
import { ReviewsComponent } from './components/profile/reviews/reviews.component';
import { PlaylistComponent } from './components/profile/playlist/playlist.component';
import { ArtistNewsComponent } from './components/profile/artist-news/artist-news.component';
import { UploadComponent } from './components/upload/upload.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    MainPageComponent,
    CarouselComponent,
    NewMusicComponent,
    NewEventsComponent,
    RegisterComponent,
    UserContentComponent,
    OldPostComponent,
    NewPostComponent,
    RightsideNewsComponent,
    MusicContentComponent,
    FeaturedComponent,
    TopComponent,
    ProfileComponent,
    CoverComponent,
    ReviewsComponent,
    PlaylistComponent,
    ArtistNewsComponent,
    UploadComponent,
    PageNotFoundComponent,

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
