import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Customer } from './customer.model';
import { CustomerFormComponent } from '../components/customer-form/customer-form.component';
import { DeleteDialogComponent } from '../components/delete-dialog/delete-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  customer = {} as Customer;
  constructor(private bsModalService: BsModalService) {}
  bsModalRef = {} as BsModalRef;

  openCustomerForm(customer?: Customer): void {
    // Pass an existing customer for editing or create a new one
    customer = customer || ({} as Customer);
    const initialState = { customer };

    this.bsModalRef = this.bsModalService.show(CustomerFormComponent, {
      initialState,
      class: 'modal-dialog-centered',
    });
  }

  openDeleteDialog(customer?: Customer): void {
    // if (customer) {
    const initialState = { customer };
    this.bsModalRef = this.bsModalService.show(DeleteDialogComponent, {
      initialState,
      class: 'modal-dialog-centered',
    });
    // } else {
    //   console.log('EVERYTHING!');
    // }
  }
}
