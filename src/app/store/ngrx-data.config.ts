import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Customers: {},
};

export const entityConfig = {
  entityMetadata,
  pluralNames: {
    Customers: 'Customers',
  },
};
