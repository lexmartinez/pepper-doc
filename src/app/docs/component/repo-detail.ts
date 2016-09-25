import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoreService} from '../service/core.service';

@Component({
  selector: 'repo-detail',
  templateUrl: '../template/repo-detail.html'
})
export class RepoDetail implements OnInit {
  private user:string;
  private app:string;
  public repoDetails:any = {};

  constructor(public coreService:CoreService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.route.snapshot.parent.params['user'];
      this.app = params['app'] || '';

      if (this.app) {
        this.coreService.getRepoForOrg(this.user, this.app)
          .subscribe(repoDetails => {
            this.repoDetails = repoDetails;
          });
      }
    });
  }
}
