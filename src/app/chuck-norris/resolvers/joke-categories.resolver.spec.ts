import { TestBed } from '@angular/core/testing';

import { JokesCategoriesResolver } from './jokes-categories.resolver';

describe('JokeCategoriesResolver', () => {
  let resolver: JokesCategoriesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(JokesCategoriesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
