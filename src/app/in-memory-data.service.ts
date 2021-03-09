import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      {
        id: 4,
        name: 'John Doe',
        email: 'john@sgtpeppers.org',
        house: '',
        street: '',
        city: '',
        zip: '35000',
        coordinates: [],
      },
      {
        id: 1,
        name: 'Paul Doe',
        email: 'paul@sgtpeppers.org',
        house: '',
        street: '',
        city: '',
        zip: '0132',
        coordinates: [],
      },
      {
        id: 2,
        name: 'Ringo Doe',
        email: '',
        house: '',
        street: 'Abbey Rd.',
        city: '',
        zip: '35000',
        coordinates: [25.26379072264602, 54.698433832952944],
      },
      {
        id: 3,
        name: 'George Taxman',
        email: '',
        house: '15',
        street: 'Gedimino pr.',
        city: 'Vilnius',
        zip: '35000',
        coordinates: [],
      },
    ];
    return { customers };
  }

  genId(customers: Customer[]): number {
    return customers.length > 0
      ? Math.max(...customers.map((customer) => customer.id)) + 1
      : 11;
  }
}
