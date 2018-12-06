import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private spotifyUrlSearchAlbum = "https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q="

  private token = "BQCFht20BPh8vVUqKC8dQX_GUpGH_XQQoSS61Sp0s2fDeNzi7dmgCMShnjLuI-UiqVMTV60pTFisBGqGzLcRl_-v0COVFkTcs5I9woJCEp5yl2iyAzGtKp3rzPykAM9MKKb3qkSrCiYXTWJJH_x69W8qkVwMQvLaOn3KD6nMR59MH2tu-Gf2cA2T_E_x0PhBpe9wP7vE-Eulb9GXhf_tG0KYJC_ufhA"

  private headers =  {
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer '+ this.token 
  }

  private spotifyUrlSearchChanteur = 'https://api.spotify.com/v1/search?type=artist&market=FR&limit=10&q='

  private spotifyUrlAlbum = 'https://api.spotify.com/v1/albums/'

  private spotifyUrlPlaylists = 'https://api.spotify.com/v1/me/playlists'

  private spotifyUrlPlaylist = 'https://api.spotify.com/v1/playlists/'

  private spotifyUrlCreatePlaylist = 'https://api.spotify.com/v1/users/'

  private spotifyUrlUser = 'https://api.spotify.com/v1/me/'

  private spotifyUrlUpdatePlaylist = 'https://api.spotify.com/v1/playlists/'

  private spotifyUrlDeleteTrackFromPlaylist = 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks'

  constructor(private http:HttpClient) { }

  /* Get list of albums */
  getAlbums(mot: string): Observable<any[]>  {
    return this.http.get<any[]>(this.spotifyUrlSearchAlbum+mot, { headers : this.headers})
  }

  /* Get list of artists */
  getChanteurs(mot: string): Observable<any[]> {
    return this.http.get<any[]>(this.spotifyUrlSearchChanteur + mot, { headers: this.headers })
  }

  /* Get album */
  getAlbum(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.spotifyUrlAlbum + id, { headers: this.headers })
  }

  /* Get list of playlists */
  getPlaylists(): Observable<any[]> {
    return this.http.get<any[]>(this.spotifyUrlPlaylists, { headers: this.headers })
  }

  /* Get playlist */
  getPlaylist(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.spotifyUrlPlaylist + id, { headers: this.headers })
  }

  /* Create a playlist */
  createPlaylist(idUser: string, name: string): Observable<any[]> {
    this.spotifyUrlCreatePlaylist = 'https://api.spotify.com/v1/users/' + idUser + '/playlists'
    return this.http.post<any[]>(this.spotifyUrlCreatePlaylist,
      {
        "name": name,
        "description": "New playlist description",
        "public": true,
      }, { headers: this.headers })
  }

  /* Get current user */
  getUser(): Observable<any[]> {
    return this.http.get<any[]>(this.spotifyUrlUser, { headers: this.headers })
  }

  /* Modify playlist details */
  updatePlaylist(idPlaylist: string, updatedName: string): Observable<any[]> {
    this.spotifyUrlUpdatePlaylist = this.spotifyUrlUpdatePlaylist + idPlaylist
    return this.http.put<any[]>(this.spotifyUrlUpdatePlaylist,
      {
        "name": updatedName,
        "description": "updatedDescription",
        "public": true
      },
      { headers: this.headers })
  }

  /* Remove song from playlist */
  deleteTrack(idPlaylist: string): Observable<any[]> {
    this.spotifyUrlDeleteTrackFromPlaylist = 'https://api.spotify.com/v1/playlists/' + idPlaylist + '/tracks'
    return this.http.delete<any[]>(this.spotifyUrlDeleteTrackFromPlaylist,{ headers: this.headers })
  }
}
