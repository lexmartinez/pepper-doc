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
  private list = [];
  private isLoading = true;
  private search = undefined;
  private resultMode = 1;

  private currentPage = 1;
  private totalPages = 1;

  constructor(private http: Http,
              private dataService: DataService, private route:ActivatedRoute, private router:Router) {}

    searchProfiles(search) {
      this.router.navigate(['/search', search]);
    }

    loadPageData(){
      this.results = [];
      var first = (this.currentPage - 1) * 10 ;
      var last = first + 10;

      if(last>this.list.length){
        last = this.list.length;
      }

      for(var i=first; i<last; i++){
        this.results.push(this.list[i]);
      }
    }

    setResultMode(mode){
      this.resultMode = mode;
      this.currentPage = 1;
      this.list = [];
      this.results = [];

      if(this.response){
        if(mode == 1){this.list = this.response.users;}
        if(mode == 2){this.list = this.response.apps;}

        if(this.list.length > 0){
          this.totalPages = Math.ceil((this.list.length/10));
          this.loadPageData();
        }

      }
    }

    ngOnInit() {
          this.route.params.subscribe(params => {
          this.search = params['search'];
          if (this.search) {
              if(this.search!==""){
                this.dataService.searchProfiles(this.search).subscribe(
                  data => {
                      this.response = JSON.parse(data._body);
                      this.setResultMode(this.resultMode);
                  },
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

    first(){
       this.currentPage = 1;
       console.log(this.currentPage);
       this.loadPageData();
    }

    previous(){
       this.currentPage = this.currentPage - 1;
       console.log(this.currentPage);
       this.loadPageData();
    }

    next(){
       this.currentPage = this.currentPage + 1;
       console.log(this.currentPage);
       this.loadPageData();
    }

    last(){
       this.currentPage = this.totalPages;
       console.log(this.currentPage);
       this.loadPageData();
    }

}
