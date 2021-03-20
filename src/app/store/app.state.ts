import { Customer } from './customer.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface AppState extends EntityState<Customer> {
  // dar reiks išsiaiškinti ar reikia
  // customersLoaded: boolean;s
  // id: string;
}

// export interface UsersState extends EntityState<Customer> {
//   // additional entities state properties
//   id: string | null;
// }
