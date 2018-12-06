import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListalbumComponent } from './listalbum/listalbum.component';
import { AppComponent } from './app.component';
import { ListechanteursComponent } from './listechanteurs/listechanteurs.component';
import { DetailalbumComponent } from './detailalbum/detailalbum.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { DetailplaylistComponent } from './detailplaylist/detailplaylist.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'listalbum', component: ListalbumComponent },
  { path: 'chanteurs', component: ListechanteursComponent },
  { path: 'album/:id', component: DetailalbumComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'playlist/:id', component: DetailplaylistComponent }
]
