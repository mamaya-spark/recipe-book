import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListContentComponent } from './shopping-list-content.component';

describe('ShoppingListContentComponent', () => {
  let component: ShoppingListContentComponent;
  let fixture: ComponentFixture<ShoppingListContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
