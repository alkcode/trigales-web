import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlanesComponent } from './flanes.component';

describe('FlanesComponent', () => {
  let component: FlanesComponent;
  let fixture: ComponentFixture<FlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
