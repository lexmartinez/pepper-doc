import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../services/data.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  private data = {};
  private profile = "";
  private isLoading = false;

  constructor(private http: Http,
              private dataService: DataService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
        this.route.params.subscribe(params => {
        this.profile = params['profile'];
        this.isLoading = true;

          if (this.profile) {
              if(this.profile!==""){
                  this.dataService.getProfile(this.profile).subscribe(
                        data => {
                            this.data = data;
                        },
                        error => console.log(error),
                        () => this.isLoading = false
                  );
              }
            }
        });
  }


}
