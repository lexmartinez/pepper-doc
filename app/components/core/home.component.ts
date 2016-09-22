import {Component} from 'angular2/core';

@Component({
    selector: 'pepper-doc',
    template: `
            <div class="container" >
                <div class="content">
                    <span>Home</span>
                    <br />
                    <a routerLink="">Details</a>
                </div>
            </div>
    	     `
})


export class HomeComponent {

  constructor() {}

}
