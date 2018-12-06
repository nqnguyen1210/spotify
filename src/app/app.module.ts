import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {SpotifyService} from './spotify.service';
import { ListalbumComponent } from './listalbum/listalbum.component';
import { AccueilComponent } from './accueil/accueil.component';
import { appRoutes } from './app.routing';
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import { DetailalbumComponent } from './detailalbum/detailalbum.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { DetailplaylistComponent } from './detailplaylist/detailplaylist.component';

@NgModule({
  declarations: [
    AppComponent,
    ListalbumComponent,
    AccueilComponent,
    ListechanteursComponent,
    DetailalbumComponent,
    PlaylistComponent,
    DetailplaylistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
