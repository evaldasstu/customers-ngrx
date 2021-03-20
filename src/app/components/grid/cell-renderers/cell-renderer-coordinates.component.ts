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
export class CoordinatesComponent {
  coordinates: number[] = [];
  friendlyCoordinates = '';

  agInit(params: ICellRendererParams): void {
    if (params.value) {
      this.coordinates = params.value;
      this.friendlyCoordinates = params.data.friendlyCoordinates;
    }
  }
}
