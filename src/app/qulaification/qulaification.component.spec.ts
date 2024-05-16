import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QulaificationComponent } from './qulaification.component';

describe('QulaificationComponent', () => {
  let component: QulaificationComponent;
  let fixture: ComponentFixture<QulaificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QulaificationComponent]
    });
    fixture = TestBed.createComponent(QulaificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
