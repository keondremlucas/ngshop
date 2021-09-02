import { TestBed } from '@angular/core/testing';

import { DogsService } from './dogs.service';
import { Dog } from '../models/dog';

// tslint:disable-next-line:max-line-length
const dogsJson = '[{"id": "4ziNJuYbfDius", "name": "relaxed bull dog GIF", "thumbnail": "https://media0.giphy.com/media/4ziNJuYbfDius/100.gif", "image": "https://media0.giphy.com/media/4ziNJuYbfDius/giphy.gif"}, {"id": "UlQI7xt5R2iuk", "name": "bull dog sleeping GIF", "thumbnail": "https://media3.giphy.com/media/UlQI7xt5R2iuk/100.gif", "image": "https://media3.giphy.com/media/UlQI7xt5R2iuk/giphy.gif"}]';
const dogJson = '[{"id": "4ziNJuYbfDius", "name": "relaxed bull dog GIF", "thumbnail": "https://media0.giphy.com/media/4ziNJuYbfDius/100.gif", "image": "https://media0.giphy.com/media/4ziNJuYbfDius/giphy.gif"}]';

describe('DogsService', () => {
  let service: DogsService;
  let dog: Dog;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DogsService);
    dog = new Dog();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return dog by id', () => {
    const dogId = '4ziNJuYbfDius'; // from dogdata.json
    expect(service.get(dogId)).toEqual(JSON.parse(dogJson)[0]);
  });

  it('should return all dogs', () => {
    service.all().subscribe(dogs => {
      expect(dogs.length).toEqual(100);
    });
  });
});
