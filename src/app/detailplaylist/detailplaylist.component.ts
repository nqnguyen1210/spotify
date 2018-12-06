import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-detailplaylist',
  templateUrl: './detailplaylist.component.html',
  styleUrls: ['./detailplaylist.component.css']
})
export class DetailplaylistComponent implements OnInit {

  idplaylist: string

  tracks: any[]

  playlist: any

  constructor(private route: ActivatedRoute, private spotService: SpotifyService) { }

  ngOnInit() {
    this.idplaylist = this.route.snapshot.params["id"];
    console.log(this.idplaylist);
    this.getPlaylist(this.idplaylist);
  }

  getPlaylist(id: string) {
    this.spotService.getPlaylist(id).subscribe(
      (resultat) => {
        console.log(resultat)
        this.playlist = resultat
        this.tracks = resultat["tracks"]["items"]
      }
    )
  }

  updatePlaylist(name: string) {
    this.spotService.updatePlaylist(this.idplaylist, name).subscribe(
      (resultat) => {
        this.spotService.updatePlaylist(this.idplaylist, name)
        this.getPlaylist(this.idplaylist);
      }
    )
  }

  deleteTrack() {
    this.spotService.deleteTrack(this.idplaylist).subscribe(
      (resultat) => {
        console.log(resultat)
        this.spotService.deleteTrack(this.idplaylist)
      }
    )
  }

}
