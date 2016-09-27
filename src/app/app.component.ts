import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'pepper-doc',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private results = [];
  private isLoading = false;

  constructor(private http: Http,  private dataService: DataService){}

  searchProfiles(search) {
    this.isLoading = true;
    this.dataService.searchProfiles(search).subscribe(
      data => {this.results = JSON.parse(data._body); console.log(JSON.parse(data._body))},
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}
