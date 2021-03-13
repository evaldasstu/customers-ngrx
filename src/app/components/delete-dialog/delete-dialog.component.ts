import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CustomerService } from '../../shared/customer.service';
import { Customer } from '../../shared/customer';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
  customer = {} as Customer;

  constructor(
    public bsModalRef: BsModalRef,
    public customerService: CustomerService,
    private location: Location,
    private router: Router
  ) {}

  onConfirm(): void {
    this.customerService.deleteCustomer(this.customer).subscribe();
    // čia galimai pravalyti gridą nelaukiant store
    if (!this.location.isCurrentPathEqualTo('/')) {
      this.router.navigate(['../../']);
    }
    this.bsModalRef.hide();
  }
}
