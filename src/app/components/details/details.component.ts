import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';

import { Customer } from '../../shared/customer';
import { CustomerService } from '../../shared/customer.service';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  customer: Customer;
  isLoading = true;
  constructor(
    public activatedRoute: ActivatedRoute,
    public customerService: CustomerService, // private location: Location
    public modalService: ModalService // private location: Location
  ) {
    this.customer = {} as Customer;
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.activatedRoute.snapshot.params.id;
    this.customerService.getCustomer(id).subscribe((customer) => {
      this.customer = customer;
      this.isLoading = false;
    });
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
}
