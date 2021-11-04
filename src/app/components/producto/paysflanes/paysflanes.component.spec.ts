import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysflanesComponent } from './paysflanes.component';

describe('PaysflanesComponent', () => {
  let component: PaysflanesComponent;
  let fixture: ComponentFixture<PaysflanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysflanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysflanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
