import { TestBed } from '@angular/core/testing';

import { JokesService } from './jokes.service';

describe('ChuckNorrisService', () => {
  let service: JokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
