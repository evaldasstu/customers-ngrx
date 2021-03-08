import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesCellRendererComponent } from './coordinates-cell-renderer.component';

describe('CoordinatesCellRendererComponent', () => {
  let component: CoordinatesCellRendererComponent;
  let fixture: ComponentFixture<CoordinatesCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatesCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatesCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
