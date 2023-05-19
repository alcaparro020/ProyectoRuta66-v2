import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEventosAdminComponent } from './ver-eventos-admin.component';

describe('VerEventosAdminComponent', () => {
  let component: VerEventosAdminComponent;
  let fixture: ComponentFixture<VerEventosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEventosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEventosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
