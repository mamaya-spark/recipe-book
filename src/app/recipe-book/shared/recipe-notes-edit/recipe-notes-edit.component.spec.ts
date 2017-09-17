import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNotesEditComponent } from './recipe-notes-edit.component';

describe('RecipeNotesEditComponent', () => {
  let component: RecipeNotesEditComponent;
  let fixture: ComponentFixture<RecipeNotesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeNotesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeNotesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
