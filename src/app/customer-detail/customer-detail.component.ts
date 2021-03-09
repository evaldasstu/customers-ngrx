import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private location: Location
  ) {
    // For strict compiling
    this.customer = {} as Customer;
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.params.id;
    this.customerService
      .getCustomer(id)
      .subscribe((customer) => (this.customer = customer));
  }

  // // From CustomersComponent
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) {
  //     return;
  //   }
  //   this.customerService
  //     .addCustomer({ name } as Customer)
  //     .subscribe((customer) => {
  //       this.customers.push(customer);
  //     });
  // }

  save(): void {
    this.customerService
      .updateCustomer(this.customer)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
