import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntructorCursoComponent } from './intructor-curso.component';

describe('IntructorCursoComponent', () => {
  let component: IntructorCursoComponent;
  let fixture: ComponentFixture<IntructorCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntructorCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntructorCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
