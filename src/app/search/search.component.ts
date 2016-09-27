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

  private response = {users:[],apps:[]};
  private results = [];
  private isLoading = true;
  private search = undefined;
  private resultMode = 1;

  constructor(private http: Http,
              private dataService: DataService, private route:ActivatedRoute, private router:Router) {}

    searchProfiles(search) {
      this.router.navigate(['/search', search]);
    }

    setResultMode(mode){
      this.resultMode = mode;
      if(this.response){
        if(mode == 1){
            this.results = this.response.users;
        }

        if(mode == 2){
            this.results = this.response.apps;
        }
      }
    }

    ngOnInit() {
          this.route.params.subscribe(params => {
          this.search = params['search'];
          if (this.search) {
              if(this.search!==""){
                this.dataService.searchProfiles(this.search).subscribe(
                  data => {this.response = JSON.parse(data._body); this.setResultMode(this.resultMode);},
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
