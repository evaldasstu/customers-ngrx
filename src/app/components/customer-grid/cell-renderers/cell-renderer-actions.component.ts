import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

import { ModalService } from 'src/app/shared/modal.service';
import { Customer } from '../../../shared/customer.model';

@Component({
  templateUrl: 'cell-renderer-actions.component.html',
})
export class ActionsComponent {
  constructor(public modalService: ModalService) {}
  customer = {} as Customer;

  agInit(params: ICellRendererParams): void {
    this.customer = params.data;
  }
}
