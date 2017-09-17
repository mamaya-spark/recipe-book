import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNotesComponent } from './recipe-notes.component';

describe('RecipeNotesComponent', () => {
  let component: RecipeNotesComponent;
  let fixture: ComponentFixture<RecipeNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
