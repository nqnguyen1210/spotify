export class Playlist {

  nom: string;
  description: string;
  public: Boolean;
  collaborative: Boolean;

  constructor(pNom: string, pDesc: string, pPublic: Boolean, pC: Boolean) {
    this.nom = pNom;
    this.description = pDesc;
    this.public = pPublic;
    this.collaborative = pC;
  }

  getNom() {
    return this.nom;
  }

  getDesc() {
    return this.description;
  }

  isPublic() {
    return this.public;
  }

  isCollaborative() {
    return this.collaborative;
  }

}
