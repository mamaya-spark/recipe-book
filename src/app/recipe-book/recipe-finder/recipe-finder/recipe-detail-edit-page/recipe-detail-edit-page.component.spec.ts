import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailEditPageComponent } from './recipe-detail-edit-page.component';

describe('RecipeDetailEditPageComponent', () => {
  let component: RecipeDetailEditPageComponent;
  let fixture: ComponentFixture<RecipeDetailEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
