import { TestBed } from '@angular/core/testing';

import { TelevisonService } from './televison.service';

describe('TelevisonService', () => {
  let service: TelevisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelevisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
