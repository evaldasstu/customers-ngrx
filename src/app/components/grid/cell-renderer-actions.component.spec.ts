import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellRendererActionsComponent } from './cell-renderer-actions.component';

describe('CellRendererActionsComponent', () => {
  let component: CellRendererActionsComponent;
  let fixture: ComponentFixture<CellRendererActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CellRendererActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellRendererActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
