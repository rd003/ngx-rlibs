import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlibsComponent } from './rlibs.component';

describe('RlibsComponent', () => {
  let component: RlibsComponent;
  let fixture: ComponentFixture<RlibsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RlibsComponent]
    });
    fixture = TestBed.createComponent(RlibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
