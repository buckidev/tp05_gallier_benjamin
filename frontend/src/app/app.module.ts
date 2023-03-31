import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Api_httpInterceptor } from './Class/Api_httpInterceptor';
import { HttpRequestsService } from './services/http-requests.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,useClass:Api_httpInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
