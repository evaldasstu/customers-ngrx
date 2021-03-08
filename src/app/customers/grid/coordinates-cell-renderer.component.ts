import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  template: `<span [innerHTML]="value"></span>`
})
export class CoordinatesCellRendererComponent {

  value = '';

  agInit(params: ICellRendererParams): void {
    this.value = this.getValueToDisplay(params);
  }

  refresh(params: ICellRendererParams): void {
    this.value = this.getValueToDisplay(params);
  }

  getValueToDisplay(params: ICellRendererParams): string {
    console.log(params)
    return params.value.length ? `<a href="https://www.google.com/maps/place/\
${params.value[1]},${params.value[0]}" target="_blank" rel="noopener noreferrer">\
${params.valueFormatted[1]}, ${params.valueFormatted[0]}</a>` : '';
  }

}
