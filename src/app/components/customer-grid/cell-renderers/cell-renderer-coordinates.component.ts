import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  templateUrl: 'cell-renderer-coordinates.component.html',
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
