import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDirectionsEditComponent } from './recipe-directions-edit.component';

describe('RecipeDirectionsEditComponent', () => {
  let component: RecipeDirectionsEditComponent;
  let fixture: ComponentFixture<RecipeDirectionsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDirectionsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDirectionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
