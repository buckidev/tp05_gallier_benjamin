import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_classes/User';
import { HttpRequestsService } from 'src/app/_services/http-requests.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css'],
})
export class CompteComponent implements OnInit {
  user: User = new User();

  constructor(private httpRequestsService: HttpRequestsService) {}

  ngOnInit(): void {}

  users() {
    this.httpRequestsService.GetUsers().subscribe((data) => {
      this.user.nom = data.nom;
      this.user.prenom = data.prenom;
      this.user.adresse = data.adresse;
      this.user.tel = data.tel;
    });
  }
}
