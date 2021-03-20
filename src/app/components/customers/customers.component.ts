import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../store/customer.model';
import { CustomerService } from '../../shared/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
  loading$: Observable<boolean>;
  selected = {} as Customer;
  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomerService) {
    this.customers$ = customerService.entities$;
    this.loading$ = customerService.loading$;
  }

  ngOnInit() {
    this.getCustomers();
  }

  add(customer: Customer) {
    this.customerService.add(customer);
  }

  close() {
    this.selected = {} as Customer;
  }

  delete(customer: Customer) {
    this.customerService.delete(customer.id);
    this.close();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getCustomers() {
    this.customerService.getAll();
    this.close();
  }

  select(customer: Customer) {
    this.selected = customer;
  }

  update(customer: Customer) {
    this.customerService.update(customer);
  }
}
