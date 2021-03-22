import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { Customer } from '../../shared/customer.model';
import { CustomerService } from '../../shared/customer.service';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
  customer = {} as Customer;

  constructor(
    private router: Router,
    public bsModalRef: BsModalRef,
    private customerService: CustomerService,
    private messageService: MessageService
  ) {}

  onConfirm(): void {
    if (this.customer) {
      // Delete single customer
      this.customerService.delete(this.customer);
    } else {
      // Clear local storage
      localStorage.clear();
      this.messageService.onClearLocalStorage();
      window.location.reload();
    }
    this.bsModalRef.hide();
    this.router.navigate(['/']);
  }
}
