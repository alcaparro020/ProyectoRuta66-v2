import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEventosCreadosComponent } from './ver-eventos-creados.component';

describe('VerEventosCreadosComponent', () => {
  let component: VerEventosCreadosComponent;
  let fixture: ComponentFixture<VerEventosCreadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEventosCreadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEventosCreadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
