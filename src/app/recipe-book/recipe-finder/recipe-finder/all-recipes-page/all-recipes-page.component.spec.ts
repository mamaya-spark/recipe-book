import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecipesPageComponent } from './all-recipes-page.component';

describe('AllRecipesPageComponent', () => {
  let component: AllRecipesPageComponent;
  let fixture: ComponentFixture<AllRecipesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRecipesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
