import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  template: `<a
    *ngIf="coordinates.length"
    href="https://www.google.com/maps/place/{{ coordinates[1] }},{{
      coordinates[0]
    }}"
    target="_blank"
    rel="noopener noreferrer"
    >{{ coordinates[1] }}, {{ coordinates[0] }}</a
  >`,
})
export class CoordinatesCellRendererComponent {
  coordinates: number[] = [];

  agInit(params: ICellRendererParams): void {
    this.coordinates = params.value;
  }
}
