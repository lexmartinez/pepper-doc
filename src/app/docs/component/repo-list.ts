import {Component, OnInit} from '@angular/core';
import {CoreService} from '../service/core.service.ts';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'repo-list',
  templateUrl: '../template/repo-list.html'
})
export class RepoList implements OnInit {
  user: string;
  apps: Observable<any>;

  constructor(public coreService: CoreService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = params['user'];
      if (this.user) {
        this.apps = this.coreService.getReposForOrg(this.user);
      }
    });
  }
}
