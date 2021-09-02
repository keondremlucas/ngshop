import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DogListComponent } from './dog-list.component';
import { DogDetailComponent } from '../dog-detail/dog-detail.component';

describe('DogListComponent', () => {
  let component: DogListComponent;
  let fixture: ComponentFixture<DogListComponent>;
  let html;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DogListComponent, DogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListComponent);
    component = fixture.componentInstance;
    html = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of dogs', () => {
    spyOn(component, 'loadDogs');
    const allButton = html.querySelector('#allDogs');
    allButton.click();
    expect(component.loadDogs).toHaveBeenCalled();
  });

  it('should render list of favorite dogs', () => {
    spyOn(component, 'loadFavorites');
    const favButton = html.querySelector('#favorites');
    favButton.click();
    expect(component.loadFavorites).toHaveBeenCalled();
  });
});
