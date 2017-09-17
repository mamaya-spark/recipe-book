import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecipeDetailPageComponent } from './my-recipe-detail-page.component';

describe('MyRecipeDetailPageComponent', () => {
  let component: MyRecipeDetailPageComponent;
  let fixture: ComponentFixture<MyRecipeDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecipeDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecipeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
