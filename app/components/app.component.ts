import {Component} from 'angular2/core';
import {ProfileComponent} from './core/profile.component';
import {ProjectComponent} from './core/project.component';
import {HomeComponent} from './core/home.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'pepper-doc',
    directives: [ProfileComponent, ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault:true },
    { path: '/:profile', name: 'Profile', component: ProfileComponent },
    { path: '/:profile/:project', name: 'Project', component: ProjectComponent }
])
export class AppComponent {}
