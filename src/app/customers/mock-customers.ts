import { Customer } from './customer';

export const CUSTOMERS: Customer[] = [
  {
    id: 0, name: 'John Doe', email: 'john@sgtpeppers.org', house: '', street: '', city: '',
    zip: '35000', coordinates: []
  },
  {
    id: 1, name: 'Paul Doe', email: 'paul@sgtpeppers.org', house: '', street: '', city: '',
    zip: '0132', coordinates: [25.263345655, 54.698545659]
  },
  {
    id: 2, name: 'Ringo Doe', email: '', house: '', street: 'Abbey Rd.', city: '', zip: '35000',
    coordinates: []
  },
  {
    id: 3, name: 'George Taxman', email: '', house: '15', street: 'Gedimino pr.', city: 'Vilnius',
    zip: '35000', coordinates: []
  }
];
