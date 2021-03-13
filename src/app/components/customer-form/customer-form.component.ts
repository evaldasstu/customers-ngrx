import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Customer } from '../../shared/customer';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { customerFormFields } from './customer-form-fields.config';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
})
export class CustomerFormComponent implements OnInit {
  customer = {} as Customer;
  model = {} as Customer;
  // model: any = {};
  options: FormlyFormOptions = {};

  constructor(
    public bsModalRef: BsModalRef,
    private customerService: CustomerService,
    private location: Location,
    private router: Router
  ) {}

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = customerFormFields;

  submit(): void {
    if (this.form.valid) {
      if (this.customer) {
        // Edit customer
        // nžn ar two way binded
        this.customerService.updateCustomer(this.model).subscribe();
      } else {
        // New customer
        // nžn ar two way binded
        this.customerService.addCustomer(this.model).subscribe();
      }
      // Most likely not needed:
      // if (!this.location.isCurrentPathEqualTo('/')) {
      //   this.router.navigate(['../../']);
      // }
      this.hideModal();
    }
  }

  hideModal(): void {
    // Cannot invoke an object which is possibly 'undefined'
    // this.options.resetModel();
    this.bsModalRef.hide();
  }

  ngOnInit(): void {
    this.model = this.customer;
  }
}
