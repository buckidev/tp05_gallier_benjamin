import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators'
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders,HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class Api_httpInterceptor implements HttpInterceptor{

    public static jwtToken:String="";
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if(Api_httpInterceptor.jwtToken!=""){
            req=req.clone({setHeaders:{Authorization:`Bearer ${Api_httpInterceptor.jwtToken}`}});
            console.log("Bearer renvoyé:"+Api_httpInterceptor.jwtToken);
        }

        return next.handle(req).pipe(tap(
            (evt:HttpEvent<any>)=>{
                if(evt instanceof HttpResponse){
                    let tab : Array<String>;
                    let enteteAuthorization = evt.headers.get('Authorization');
                    if(enteteAuthorization != null){
                        tab=enteteAuthorization.split(/Bearer\s+(.*)$/i);
                        if(tab.length>1){
                            Api_httpInterceptor.jwtToken=tab[1];
                            console.log("Bearer renvoyé:"+Api_httpInterceptor.jwtToken);
                        }
                    }
                }
            }
        ))
    }

}