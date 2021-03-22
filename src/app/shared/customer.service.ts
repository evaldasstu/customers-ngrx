import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends EntityCollectionServiceBase<Customer> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Customers', factory);
  }
}
