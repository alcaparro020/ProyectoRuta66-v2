import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCocheComponent } from './new-coche.component';

describe('NewCocheComponent', () => {
  let component: NewCocheComponent;
  let fixture: ComponentFixture<NewCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
