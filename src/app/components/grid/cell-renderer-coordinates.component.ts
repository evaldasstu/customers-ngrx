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
    >{{ friendlyCoordinates }}</a
  >`,
})
export class CellRendererCoordinatesComponent {
  coordinates: number[] = [];
  friendlyCoordinates = '';

  agInit(params: ICellRendererParams): void {
    this.coordinates = params.data.coordinates;
    this.friendlyCoordinates = params.value;
  }
}
