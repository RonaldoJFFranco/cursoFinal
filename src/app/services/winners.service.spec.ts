import { TestBed } from '@angular/core/testing';

import { WinnersService } from './winners.service';

describe('WinnersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WinnersService = TestBed.get(WinnersService);
    expect(service).toBeTruthy();
  });
});
