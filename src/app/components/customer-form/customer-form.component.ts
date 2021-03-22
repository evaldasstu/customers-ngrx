import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { v4 } from 'uuid';

import { Customer } from '../../shared/customer.model';
import { customerFormFieldConfig } from './customer-form-field.config';
import { CustomerService } from '../../shared/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
})
export class CustomerFormComponent implements OnInit, OnDestroy {
  customer = {} as Customer;
  formModel = {} as Customer;
  formOptions = {} as FormlyFormOptions;
  formFields: FormlyFieldConfig[] = customerFormFieldConfig;
  form = new FormGroup({});

  constructor(
    private router: Router,
    public bsModalRef: BsModalRef,
    private customerService: CustomerService
  ) {}

  onSubmit(): void {
    if (this.form.valid) {
      // Generate unique IDs for new entries
      this.formModel.id = this.formModel.id || v4();

      this.customerService.upsert(this.formModel);
      this.bsModalRef.hide();
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.formModel = { ...this.customer };
  }

  ngOnDestroy(): void {
    this.form.reset();
  }
}
