import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonUPComponent } from './boton-up.component';

describe('BotonUPComponent', () => {
  let component: BotonUPComponent;
  let fixture: ComponentFixture<BotonUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonUPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
