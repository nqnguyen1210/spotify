import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-detailalbum',
  templateUrl: './detailalbum.component.html',
  styleUrls: ['./detailalbum.component.css']
})
export class DetailalbumComponent implements OnInit {

  idalbum: string

  tracks: any[]

  album: any

  constructor(private route: ActivatedRoute, private spotService: SpotifyService) { }

  ngOnInit() {
    this.idalbum = this.route.snapshot.params["id"];
    console.log(this.idalbum);
    this.getAlbum(this.idalbum)
  }

  getAlbum(id: string) {
    this.spotService.getAlbum(id).subscribe(
      (resultat) => {
        console.log(resultat)
        this.album = resultat
        this.tracks = resultat["tracks"]["items"]
      }
    )
  }

}
