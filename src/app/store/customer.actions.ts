import { Customer } from './customer.model';
import { createAction, props } from '@ngrx/store';
// import { AppState } from './app.state';

export const loadCustomer = createAction(
  'Details Components] Load Customer via Service',
  props<{ id: string }>()
);

export const loadAllCustomers = createAction(
  '[Grid Component] Load Customers via Service'
);

// patikslint į byid
// export const customerLoaded = createAction(
//   '[Customer Effect] Customer Loaded Successfully',
//   props<{ customer: Customer }>()
// );

// patikslint į all
export const customersLoaded = createAction(
  '[Customer Effect] Customers Loaded Successfully',
  props<{ customers: Customer[] }>()
);

export const removeCustomer = createAction(
  '[Delete Dialog Component] Delete Customer',
  props<{ id: string }>()
);

// export const removeCustomerSuccess = createAction(
//   '[Customer Effect] Customer Deleted',
//   props<{ id: string }>()
// );

export const addCustomer = createAction(
  '[Customer Form] Add New Customer',
  props<{ customer: Customer }>()
);

export const setCustomer = createAction(
  '[Customer Form] Set (?) Customer', // geresnis pavadinimas
  props<{ customer: Customer }>()
);

export const customerActions = {
  loadCustomer,
  loadAllCustomers,
  addCustomer,
  // customerLoaded,
  customersLoaded,
  removeCustomer,
  setCustomer,
};
