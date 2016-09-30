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

  private data = {apps:[],profile:{}};
  private profile = "";
  private isLoading = false;
  private listApps = [];

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
                            this.listApps = data.apps;
                        },
                        error => console.log(error),
                        () => this.isLoading = false
                  );
              }
            }
        });
  }

  filterApps(search) {
      this.listApps = [];
      if(search && search!=""){
        var pattern = new RegExp('.*'+search+'.*', "i");
        for(var i=0;i<this.data.apps.length;i++){
           if(pattern.test(this.data.apps[i].name)){
              this.listApps.push(this.data.apps[i]);
           }
        }
      }else{
        this.listApps = this.data.apps;
      }
  }


}
