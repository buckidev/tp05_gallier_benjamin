import { Component, OnInit } from '@angular/core';
import { ApiInterceptor } from 'src/app/_classes/ApiInterceptor';
import { User } from 'src/app/_classes/User';
import { HttpRequestsService } from 'src/app/_services/http-requests.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  userLog: User = new User();

  constructor(private httpRequestsService: HttpRequestsService) {}

  ngOnInit(): void {}

  login() {
    this.httpRequestsService.login('l', 'p').subscribe((data) => {
      console.log(data);
      this.userLog.nom = data.nom;
      this.userLog.prenom = data.prenom;
      ApiInterceptor.jwtToken = data.jwt;
    });
  }
}
