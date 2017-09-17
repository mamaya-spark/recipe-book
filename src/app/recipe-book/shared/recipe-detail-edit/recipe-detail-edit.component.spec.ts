import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailEditComponent } from './recipe-detail-edit.component';

describe('RecipeDetailEditComponent', () => {
  let component: RecipeDetailEditComponent;
  let fixture: ComponentFixture<RecipeDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
