import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  private app = "";
  private profile = "";

  constructor(private route:ActivatedRoute, private router:Router) {

    this.route.params.subscribe(params => {
    this.profile = params['profile'];
    this.app = params['app'];


      if (this.profile && this.app) {
          if(this.profile!=="" && this.app!=""){
              /*this.dataService.getProfile(this.profile).subscribe(
                    data => {
                        this.data = data;
                        this.listApps = data.apps;
                    },
                    error => console.log(error),
                    () => this.isLoading = false
              );*/
              console.log("service subscription here!")
          }
        }
    });

  }

}
