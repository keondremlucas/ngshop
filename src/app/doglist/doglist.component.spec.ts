import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogdataService } from '../dogdata.service';
import { DoglistComponent } from './doglist.component';

describe('DoglistComponent', () => {
  let component: DoglistComponent;
  let fixture: ComponentFixture<DoglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Create an array of dog objects', () => {

    expect(component.dogs).toBeTruthy();

  });


});
