import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../services/data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {

  private isLoading = true;
  private results = [];
  private totalApps = 9;

  constructor(private http: Http,
              private dataService: DataService, private route:ActivatedRoute, private router:Router) {}

    refresh(){
      this.isLoading = true;
      this.dataService.exploreApps(this.totalApps).subscribe(
        data => {
            this.results = data;
        },
        error => console.log(error),
        () => this.isLoading = false
      );
    }


    ngOnInit() {
      this.refresh();
    }


}
