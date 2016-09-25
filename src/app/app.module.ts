import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {CoreService} from "./docs/service/core.service";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RepoBrowser} from './docs/component/repo-browser';
import {RepoList} from './docs/component/repo-list';
import {RepoDetail} from './docs/component/repo-detail';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { NgSemanticModule } from 'ng-semantic';

@NgModule({
  declarations: [AppComponent, AboutComponent, RepoBrowser, RepoList, RepoDetail, HomeComponent],
  imports     : [BrowserModule, NgSemanticModule , FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [CoreService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {}
