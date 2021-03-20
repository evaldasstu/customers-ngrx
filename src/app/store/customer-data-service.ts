import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EntityCollectionDataService,
  DefaultDataService,
  HttpUrlGenerator,
  Logger,
  QueryParams,
} from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './customer.model';

@Injectable()
export class CustomerDataService extends DefaultDataService<Customer> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    logger: Logger
  ) {
    super('Customer', http, httpUrlGenerator);
    logger.log('Created custom Customer EntityDataService');
  }

  getAll(): Observable<Customer[]> {
    return super.getAll();
    //   .pipe(map((customers) => customers.map((customer) => this.mapCustomer(customer))));
  }

  getById(id: string | number): Observable<Customer> {
    return super.getById(id);
    // .pipe(map((customer) => this.mapCustomer(customer)));
  }

  getWithQuery(params: string | QueryParams): Observable<Customer[]> {
    return super.getWithQuery(params);
    //   .pipe(map((customers) => customers.map((customer) => this.mapCustomer(customer))));
  }

  //   private mapCustomer(customer: Customer): Customer {
  //     return { ...customer, dateLoaded: new Date() };
  //   }
}
