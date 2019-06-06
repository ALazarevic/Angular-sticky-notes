import { TestBed } from '@angular/core/testing';

import { MatchPasswordValidator } from './match-password.validator';

describe('MatchPasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchPasswordValidator = TestBed.get(MatchPasswordValidator);
    expect(service).toBeTruthy();
  });
});
