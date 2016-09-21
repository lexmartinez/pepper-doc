import {Component} from 'angular2/core';
import {LoginComponent} from './auth/login.component';
import {PrivateComponent} from './auth/private.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'pepper-doc',
    directives: [LoginComponent, ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    { path: '/home', name: 'Home', component: PrivateComponent, useAsDefault:true },
    { path: '/login', name: 'Login', component: LoginComponent }
])
export class AppComponent {}
