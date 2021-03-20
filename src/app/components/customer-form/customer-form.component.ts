// trūkumų: ?
import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { AppState } from '../../store/app.state';
import { customerFormFieldConfig } from './customer-form-field.config';
import { Customer } from '../../store/customer.model';
import { addCustomer } from '../../store/customer.actions';
import { Update } from '@ngrx/entity';
import { ModalService } from '../../shared/modal.service';
import { CustomerService } from '../../shared/customer.service';

import * as uuid from 'uuid';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerFormComponent implements OnInit, OnChanges {
  @Input() customer = {} as Customer;
  @Output() unselect = new EventEmitter<string>();
  @Output() add = new EventEmitter<Customer>();
  @Output() update = new EventEmitter<Customer>();

  @ViewChild('name', { static: true }) nameElement = {} as ElementRef;

  // addMode = false;

  // customer = {} as Customer;
  options: FormlyFormOptions = {};
  model = {} as Customer;

  constructor(
    private location: Location,
    private router: Router,
    private store: Store<AppState>,
    public bsModalRef: BsModalRef,
    public modalService: ModalService,
    private customerService: CustomerService
  ) {}

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = customerFormFieldConfig;

  onSubmit(): void {
    // if (this.form.valid) {
    //   const customer = this.model;
    //   console.log('?', customer);
    //   this.store.dispatch(submitCustomer({ customer }));

    //   // Galimai į efektą
    //   this.closeModal();
    //   // Galimai į efektą
    //   // Navigate home after Add new customer
    //   if (!customer.id) {
    //     this.router.navigate(['../../']);
    //   }
    // }

    if (this.form.valid) {
      const customer = this.model;

      // UPDATE
      if (customer.id) {
        // const update: Update<Customer> = {
        //   id: customer.id,
        //   changes: {
        //     ...customer,
        //   },
        // this.customerService.update(customer);
        this.updateCustomer(customer);

        // this.store.dispatch(addCustomer({ update }));
      }

      // ADD
      else {
        console.log('awfaw');
        // this.store.dispatch(addCustomer({ customer }))

        // this.customerService.add(customer);
        customer.id = uuid.v4();
        this.addCustomer(customer);
      }
    }
  }

  // closeModal(): void {
  //   this.bsModalRef.hide();
  // }

  addCustomer(customer: Customer) {
    console.log('add');
    console.log({ ...this.model });
    // this.customerService.add(customer);
    this.add.emit({ ...this.model });
  }

  updateCustomer(customer: Customer) {
    // this.customerService.update(customer);
    this.update.emit({ ...this.customer, ...this.model });
    this.close();
  }

  close() {
    this.unselect.emit();
  }

  ngOnInit(): void {
    this.model = { ...this.customer };
  }

  ngOnChanges(changes: SimpleChanges) {
    // Reiks sutaisyti:
    // this.setFocus();
    if (this.customer && this.customer.id) {
      this.form.patchValue(this.customer);
      // this.addMode = false;
    } else {
      this.form.reset();
      // this.addMode = true;
    }
  }

  // Reiks sutaisyti:
  // setFocus() {
  //   this.nameElement.nativeElement.focus();
  // }
}
