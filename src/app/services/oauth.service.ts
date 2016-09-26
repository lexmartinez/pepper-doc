import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class OAuthService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

   validateCode(code) {
    var body = {
      /*"client_id":"a023dd0f88014d41ef6b",
      "client_secret":"b3c7703fdcdd5bab9fcf24cb710ada0c671e7fb3",
      "code":code,
      "redirect_uri":"http://localhost:3000/"*/
    };
    return this.http.post("https://github.com/login/oauth/access_token",JSON.stringify(body),this.options);

  }

}
