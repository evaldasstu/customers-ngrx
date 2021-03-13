import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Customer } from '../shared/customer';
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
    // Tried to avoid undefined when resetting the model
    customer = customer || ({} as Customer);
    const initialState = { customer };
    this.bsModalRef = this.bsModalService.show(CustomerFormComponent, {
      initialState,
      class: 'modal-dialog-centered',
    });
  }

  // might need to receive an array
  openDeleteDialog(customer: Customer): void {
    const initialState = { customer };
    this.bsModalRef = this.bsModalService.show(DeleteDialogComponent, {
      initialState,
      class: 'modal-dialog-centered',
    });
  }
}
