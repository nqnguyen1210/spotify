import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-listechanteurs',
  templateUrl: './listechanteurs.component.html',
  styleUrls: ['./listechanteurs.component.css']
})
export class ListechanteursComponent implements OnInit {

  chanteurs: any[]

  constructor(private spotService: SpotifyService) { }

  ngOnInit() {
    this.chercherChanteur("Soobin");
  }

  chercherChanteur(mot: string) {
    this.spotService.getChanteurs(mot).subscribe(
      (resultat) => {
        console.log(resultat)
        this.chanteurs = resultat["artists"]["items"]
      }
    )
  }

}
