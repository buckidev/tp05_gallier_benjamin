import { Component, OnInit, ViewChild } from '@angular/core';
import { Produit } from 'src/app/_classes/Produit';
import { HttpRequestsService } from 'src/app/_services/http-requests.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {
  produits: Produit[] = [];
  constructor(private httpRequestsService: HttpRequestsService) {}

  ngOnInit(): void {}

  catalogue() {
    this.httpRequestsService.GetCatalogue().subscribe((data) => {
      console.log(data);
      data.map((dataItem: any) => {
        this.produits.push(
          new Produit(dataItem.name, dataItem.price, dataItem.description)
        );
      });
    });
  }
}
