import { Component, Pipe } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../services/data.service';


@Pipe({
  name: 'prettyprint'
})
export class PrettyPrintPipe {
  transform(val) {
    var obj = JSON.parse(val);
    return JSON.stringify(obj, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }
}

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  pipes: [ PrettyPrintPipe ]
})
export class ApplicationComponent {

  private app = "";
  private profile = "";
  private data = {"services":[]};
  private current = "pepper-doc-intro";
  private services = [];
  private tab = "reference";

  constructor(private route:ActivatedRoute, private router:Router,   private dataService: DataService) {

    this.route.params.subscribe(params => {
    this.profile = params['profile'];
    this.app = params['app'];

      if (this.profile && this.app) {
          if(this.profile!=="" && this.app!=""){
              this.dataService.getApp(this.app, this.profile).subscribe(
                    data => {
                        this.data = data;
                        this.services = this.data.services;
                    },
                    error => console.log(error),
              );
          }
        }
    });

  }

  setCurrent(value){
    this.current = value;
    this.tab = "reference";
  }

  setTab(value){
    this.tab = value;
  }

  filterServices(search) {
      this.services = [];
      if(search && search!=""){
        var pattern = new RegExp('.*'+search+'.*', "i");
        for(var i=0;i<this.data.services.length;i++){
           if(pattern.test(this.data.services[i].name)){
              this.services.push(this.data.services[i]);
           }
        }
      }else{
        this.services = this.data.services;
      }
  }

}
