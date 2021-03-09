import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  template: `<a href="customer/{{ customer.id }}">Details</a>
    <a href="#" (click)="delete(customer)" class="ml-3 text-danger"
      >Delete</a
    > `,
})
export class ActionsCellRendererComponent {
  constructor(private customerService: CustomerService) {}
  customer = {} as Customer;

  agInit(params: ICellRendererParams): void {
    this.customer = params.data;
  }

  delete(customer: Customer): void {
    this.customerService.deleteCustomer(customer).subscribe();
  }
}
