// Trūkumų: 0
import { AppState } from './app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectEntities } from './customer.reducers';

export const customerFeatureSelector = createFeatureSelector<AppState>(
  'customers'
);

export const selectAllCustomers = createSelector(
  customerFeatureSelector,
  selectAll
);

// export const areCustomersLoaded = createSelector(
//   customerFeatureSelector,
//   (state: AppState) => state.customersLoaded
// );

export const selectCustomerById = (id: string) =>
  createSelector(
    customerFeatureSelector,
    selectEntities,
    (state: AppState) => state.entities[id]
  );
