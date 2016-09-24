import {Routes} from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'docs', component: RepoBrowser,
    children: [
      {path: '', component: RepoList},
      {path: ':profile', component: RepoList,
        children: [
          {path: '', component: RepoDetail},
          {path: ':app', component: RepoDetail}
        ]
      }]
  }
];
