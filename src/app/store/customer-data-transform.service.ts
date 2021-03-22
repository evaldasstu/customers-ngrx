import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../shared/customer.model';

@Injectable()
export class CustomerDataTransformService extends DefaultDataService<Customer> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Customers', http, httpUrlGenerator);
  }

  getAll(): Observable<Customer[]> {
    return super.getAll();
  }

  getById(id: string): Observable<Customer> {
    return (
      super
        .getById(id)
        // @ts-ignore
        .pipe(map((customer) => customer[0]))
    );
  }

  upsert(customer: Customer): Observable<any> {
    // @ts-ignore
    return super.upsert(customer).pipe(map(() => customer[0]));
  }
}
