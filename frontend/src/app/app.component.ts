import { Component } from '@angular/core';
import { Api_httpInterceptor } from './Class/Api_httpInterceptor';
import { Produit } from './Class/Produit';
import { User } from './Class/User';
import { HttpRequestsService } from './services/http-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  userLog:User=new User();
  user:User=new User();
  produit:Produit[]=[];
  helloMsg:string="";
  constructor(private httpRequestsService : HttpRequestsService) { }

  login(){
    this.httpRequestsService.login("l","p").subscribe(
      data=>{
        console.log(data);
        this.userLog.nom=data.nom;
        this.userLog.prenom=data.prenom;
        Api_httpInterceptor.jwtToken=data.jwt;
      }
    )
  }

  hello(){
    this.httpRequestsService.Hello("Jérôme").subscribe(
      data=>{
        console.log(data);
        this.helloMsg=data.nom;
      }
    )
  }
  
  users(){
    this.httpRequestsService.GetUsers().subscribe(
      data=>{
        this.user.nom=data.nom;
        this.user.prenom=data.prenom;
        this.user.adresse=data.adresse;
        this.user.tel=data.tel;
      }
    )
  }

  catalogue(){
    this.httpRequestsService.GetCatalogue().subscribe(
      data=>{
        console.log(data);
        data.map((dataItem:any)=>{
          this.produit.push(new Produit(dataItem.prix,dataItem.ref,dataItem.titre));
        })
      }
    )
  }
}
