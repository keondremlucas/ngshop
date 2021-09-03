import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoglistComponent } from './doglist/doglist.component';
import { DogdataService } from './dogdata.service';
import DOGS from './dogdata.json';
import {Dog} from './dog';
describe('DogdataService', () => {
  let service: DogdataService;
  let listcomponent: DoglistComponent;
  let component: DoglistComponent;
  let fixture: ComponentFixture<DoglistComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogdataService);
    fixture = TestBed.createComponent(DoglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test if array contains obervable dog objects', () => {

    service.alldogs().subscribe(data => {
      expect(data.length).toEqual(DOGS.length);
    })

  });

  it('Test if function get dog returns a dog', () => {


    expect(service.getdog("4ziNJuYbfDius")).toEqual(DOGS[0]);

  });

  it('Test if likes are updated on click', () => {
    service.likeclick(0)
    service.alldogs().subscribe(data => {
      expect(data[0].likes).toEqual(1);
    })

  });

  it('Test if favorites are updated on click', () => {
    service.favoriteclick(0)
    service.alldogs().subscribe(data => {
      expect(data[0].favorite).toBeTruthy();
    })

  });

});
