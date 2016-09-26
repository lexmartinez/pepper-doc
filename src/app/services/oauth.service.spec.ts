/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OAuthService } from './oauth.service';

describe('Service: OAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OAuthService]
    });
  });

  it('should ...', inject([OAuthService], (service: OAuthService) => {
    expect(service).toBeTruthy();
  }));
});
