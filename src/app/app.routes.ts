import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RepoBrowser} from './docs/component/repo-browser';
import {RepoList} from './docs/component/repo-list';
import {RepoDetail} from './docs/component/repo-detail';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'docs', component: RepoBrowser,
    children: [
      {path: '', component: RepoList},
      {path: ':user', component: RepoList,
        children: [
          {path: '', component: RepoDetail},
          {path: ':app', component: RepoDetail}
        ]
      }]
  }
];
