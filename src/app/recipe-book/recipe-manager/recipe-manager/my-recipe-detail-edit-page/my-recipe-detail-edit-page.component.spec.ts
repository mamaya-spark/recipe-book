import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecipeDetailEditPageComponent } from './my-recipe-detail-edit-page.component';

describe('MyRecipeDetailEditPageComponent', () => {
  let component: MyRecipeDetailEditPageComponent;
  let fixture: ComponentFixture<MyRecipeDetailEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecipeDetailEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecipeDetailEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
