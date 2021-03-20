import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Customer } from './store/customer.model';
import { CustomerService } from './shared/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  selected = {} as Customer;
  customers = [] as Customer[];
  loading = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  add(customer: Customer) {
    this.loading = true;
    this.customerService
      .add(customer)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        (addedCustomer) =>
          (this.customers = this.customers.concat(addedCustomer))
      );
  }

  close() {
    this.selected = {} as Customer;
  }

  delete(customer: Customer) {
    this.loading = true;
    this.close();
    this.customerService
      .delete(customer)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.customers = this.customers.filter((h) => h.id !== customer.id))
      );
  }

  enableAddMode() {
    this.selected = {} as any;
  }

  getCustomers() {
    this.loading = true;
    this.customerService
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((customers) => (this.customers = customers));
    this.close();
  }

  select(customer: Customer) {
    this.selected = customer;
  }

  update(customer: Customer) {
    this.loading = true;
    this.customerService
      .update(customer)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(
        () =>
          (this.customers = this.customers.map((h) =>
            h.id === customer.id ? customer : h
          ))
      );
  }
}
