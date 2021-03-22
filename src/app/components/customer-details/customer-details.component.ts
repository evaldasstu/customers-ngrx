import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Customer } from '../../shared/customer.model';
import { ModalService } from '../../shared/modal.service';
import { CustomerService } from '../../shared/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
})
export class CustomerDetailsComponent implements OnInit {
  customer$ = {} as Observable<Customer>;

  constructor(
    private activatedRoute: ActivatedRoute,
    public modalService: ModalService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customer$ = this.customerService.getByKey(
      this.activatedRoute.snapshot.params.id
    );
  }
}
