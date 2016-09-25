import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../service/core.service';

@Component({
  selector: 'repo-browser',
  templateUrl: '../template/repo-browser.html'
})
export class RepoBrowser {

  constructor(private router: Router, private coreService: CoreService) {
  }

  searchForOrg(orgName: string) {
    this.coreService.getOrg(orgName)
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate(['/docs', orgName]);
      });
  }

}
