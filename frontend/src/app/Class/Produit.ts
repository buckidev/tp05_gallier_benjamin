export class Produit {
    public prix:string="";
    public ref:string="";
    public titre:string="";

    constructor(prix:string,ref:string,titre:string){
        this.prix=prix;
        this.ref=ref;
        this.titre=titre;
    }
}