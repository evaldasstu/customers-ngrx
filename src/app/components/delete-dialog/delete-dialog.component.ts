// Trūkumų: 1

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { Customer } from '../../store/customer.model';
import { removeCustomer } from '../../store/customer.actions';
import { AppState } from '../../store/app.state';
import { CustomerService } from '../../shared/customer.service';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
  customer = {} as Customer;

  constructor(
    private location: Location,
    private router: Router,
    private store: Store<AppState>,
    public bsModalRef: BsModalRef,
    private customerService: CustomerService,
    public modalService: ModalService
  ) {}

  onConfirm(): void {
    // this.store.dispatch(removeCustomer({ id: this.customer.id }));
    this.customerService.delete(this.customer);
    this.bsModalRef.hide();
    // relative paths probably won't work:
    if (!this.location.isCurrentPathEqualTo('/')) {
      this.router.navigate(['../../']);
    }
  }
}
