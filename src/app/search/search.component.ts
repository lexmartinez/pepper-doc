import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../services/data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private results = [];
  private isLoading = true;
  constructor(private http: Http,
              private dataService: DataService, private route:ActivatedRoute) {}


    ngOnInit() {
          this.route.params.subscribe(params => {
          var search = params['search'] || '';

          if (search) {
            if(search!==""){
              this.dataService.searchProfiles(search).subscribe(
                data => {this.results = JSON.parse(data._body)},
                error => console.log(error),
                () => this.isLoading = false
              );
            }else{
              this.isLoading = false;
              this.results = [];
            }
            }
          });
      }

}
