import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFinderComponent } from './recipe-finder.component';

describe('RecipeFinderComponent', () => {
  let component: RecipeFinderComponent;
  let fixture: ComponentFixture<RecipeFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
