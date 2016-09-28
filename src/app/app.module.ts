import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ExploreComponent } from './explore/explore.component';
import { DataService } from './services/data.service';
import { OAuthService } from './services/oauth.service';

import { NgSemanticModule } from 'ng-semantic';

const routing = RouterModule.forRoot([
    { path: '',  redirectTo: 'search', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'docs', component: ExploreComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:search', component: SearchComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgSemanticModule,
    routing
  ],
  providers: [
    DataService,
    OAuthService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
