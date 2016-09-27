import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  private search = undefined;
  constructor(private http: Http,
              private dataService: DataService, private route:ActivatedRoute, private router:Router) {}

    searchProfiles(search) {
      this.router.navigate(['/search', search]);
    }

    ngOnInit() {
          this.route.params.subscribe(params => {
          this.search = params['search'];
          if (this.search) {
              if(this.search!==""){
                this.dataService.searchProfiles(this.search).subscribe(
                  data => {this.results = JSON.parse(data._body)},
                  error => console.log(error),
                  () => this.isLoading = false
                );
              }
            }else{
              this.isLoading = false;
              this.results = [];
            }
          });
      }

}
