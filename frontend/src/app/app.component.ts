import { Component } from '@angular/core';
import { ApiInterceptor } from './_classes/ApiInterceptor';
import { Produit } from './_classes/Produit';
import { User } from './_classes/User';
import { HttpRequestsService } from './_services/http-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TP5';
  userLog: User = new User();
  user: User = new User();
  produit: Produit[] = [];
  helloMsg: string = '';
  constructor(private httpRequestsService: HttpRequestsService) {}

  login() {
    this.httpRequestsService.login('l', 'p').subscribe((data) => {
      console.log(data);
      this.userLog.nom = data.nom;
      this.userLog.prenom = data.prenom;
      ApiInterceptor.jwtToken = data.jwt;
    });
  }

  hello() {
    this.httpRequestsService.Hello('Jérôme').subscribe((data) => {
      console.log(data);
      this.helloMsg = data.nom;
    });
  }

  users() {
    this.httpRequestsService.GetUsers().subscribe((data) => {
      this.user.nom = data.nom;
      this.user.prenom = data.prenom;
      this.user.adresse = data.adresse;
      this.user.tel = data.tel;
    });
  }

  catalogue() {
    this.httpRequestsService.GetCatalogue().subscribe((data) => {
      console.log(data);
      data.map((dataItem: any) => {
        this.produit.push(
          new Produit(dataItem.name, dataItem.price, dataItem.description)
        );
      });
    });
  }
}
