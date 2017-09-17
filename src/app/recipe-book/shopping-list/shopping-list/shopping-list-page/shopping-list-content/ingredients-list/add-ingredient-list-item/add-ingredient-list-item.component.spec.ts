import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientListItemComponent } from './add-ingredient-list-item.component';

describe('AddIngredientListItemComponent', () => {
  let component: AddIngredientListItemComponent;
  let fixture: ComponentFixture<AddIngredientListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIngredientListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngredientListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
