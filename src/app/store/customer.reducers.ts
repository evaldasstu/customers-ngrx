import { Customer } from './customer.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { customerActions, customersLoaded } from './customer.actions';

import * as uuid from 'uuid'; // lauk
import { Action } from 'rxjs/internal/scheduler/Action';

// matyt nereiks, yra app.state tas pats
// export interface AppState extends EntityState<Customer> {
//   customersLoaded: boolean;
// }

export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

// ar reikia?
export const initialState = adapter.getInitialState({
  customersLoaded: false,
});

export const customerReducer = createReducer(
  initialState,

  // gal ir reikia
  // on(customerActions.customerLoaded, (state, action) => {
  //   return adapter.setOne(action.customer, state);
  // }),

  on(customerActions.customersLoaded, (state, action) => {
    return adapter.setAll(action.customers, { ...state });
  }),

  on(customerActions.removeCustomer, (state, action) => {
    return adapter.removeOne(action.id, state);
  }),

  on(customerActions.addCustomer, (state, { customer }) => {
    // return console.log(state, action);
    console.log(state, customer);
    return adapter.addOne(customer, state);
    // return {};
  })
);

// gal netyčia gali būti kažkaip vienas ID?
export const { selectAll, selectIds, selectEntities } = adapter.getSelectors();
// selectIds gal reikės kažkam o gal ne
