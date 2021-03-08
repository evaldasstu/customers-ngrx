import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  template: `<span [innerHTML]="value"></span>`
})
export class ActionsCellRendererComponent {

  value = '';

  agInit(params: ICellRendererParams): void {
    this.value = this.getValueToDisplay(params);
  }

  refresh(params: ICellRendererParams): void {
    this.value = this.getValueToDisplay(params);
  }

  getValueToDisplay(params: ICellRendererParams): string {
    return `<a href="${params.data.id}">Details</a><a href="${params.data.id}" class="ml-3 text-danger">Delete</a>`;
  }

}
