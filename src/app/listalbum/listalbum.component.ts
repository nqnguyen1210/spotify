import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-listalbum',
  templateUrl: './listalbum.component.html',
  styleUrls: ['./listalbum.component.css']
})


export class ListalbumComponent implements OnInit {

  albums: any[]

  constructor(private spotService:SpotifyService) { }

  ngOnInit() {
    this.chercherAlbum("Soobin");
  }

  chercherAlbum(mot:string) {
    this.spotService.getAlbums(mot).subscribe(
      (resultat) => {
        console.log(resultat)
        this.albums = resultat["albums"]["items"]
      }
    )
  }
}
