import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ModalService } from 'src/app/shared/modal.service';
import { Customer } from '../../shared/customer';

@Component({
  template: `<a [routerLink]="'/customer/' + customer.id">Details</a>
    <a [routerLink]="" (click)="delete(customer)" class="ml-3 text-danger"
      >Delete</a
    > `,
})
export class CellRendererActionsComponent {
  constructor(private modalService: ModalService) {
    const id = 4;
  }
  customer = {} as Customer;

  agInit(params: ICellRendererParams): void {
    this.customer = params.data;
  }

  delete(customer: Customer): void {
    this.modalService.openDeleteDialog(customer);
  }
}
