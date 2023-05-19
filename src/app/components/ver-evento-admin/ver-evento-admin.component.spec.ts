import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEventoAdminComponent } from './ver-evento-admin.component';

describe('VerEventoAdminComponent', () => {
  let component: VerEventoAdminComponent;
  let fixture: ComponentFixture<VerEventoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEventoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEventoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
