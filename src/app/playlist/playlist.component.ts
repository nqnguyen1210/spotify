import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlists: any[]

  currentUser: any

  currentUserID: string

  playlist: Playlist

  constructor(private spotService: SpotifyService) { }

  ngOnInit() {
    this.getPlaylists();
    this.getUser();
  }

  getPlaylists() {
    this.spotService.getPlaylists().subscribe(
      (resultat) => {
        console.log(resultat)
        this.playlists = resultat["items"]
      }
    )
  }

  getUser() {
    this.spotService.getUser().subscribe(
      (resultat) => {
        console.log(resultat)
        this.currentUser = resultat
        this.currentUserID = resultat["id"]
        //console.log(this.currentUserID)
      }
    )
  }

  createPlaylist(name: string) {
    //this.playlist = new Playlist("New Playlist", "Description", true, true)
    this.spotService.createPlaylist(this.currentUserID, name).subscribe(
      (resultat) => {
        this.spotService.createPlaylist(this.currentUserID, name)
        this.getPlaylists()
        console.log(resultat)
      }
    )
  }
}
