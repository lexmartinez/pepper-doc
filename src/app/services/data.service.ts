import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getCats() {
    return this.http.get('/profiles').map(res => res.json());
  }

  addCat(cat) {
    return this.http.post("/profiles", JSON.stringify(cat), this.options);
  }

  editCat(cat) {
    return this.http.put(`/profiles/${cat._id}`, JSON.stringify(cat), this.options);
  }

  deleteCat(cat) {
    return this.http.delete(`/profiles/${cat._id}`, this.options);
  }

}
