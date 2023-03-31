export class Produit {
  public name: string = '';
  public price: string = '';
  public description: string = '';

  constructor(name: string, price: string, description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}