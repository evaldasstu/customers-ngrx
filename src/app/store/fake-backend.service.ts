// Mock REST API which intercepts all HttpClient requests is working in memory.
// All of this data is being cached in local storage and persists between sessions.

import {
  ApiMockService,
  ApiMockDataCallback,
  ApiMockRootRoute,
} from '@ng-stack/api-mock';

import { Customer } from '../shared/customer.model';

export class FakeBackendService implements ApiMockService {
  getRoutes(): ApiMockRootRoute[] {
    return [
      {
        path: 'api/customers/:id',
        // @ts-ignore
        dataCallback: this.getDataCallback(),
      },
    ];
  }

  private getDataCallback(): ApiMockDataCallback<Customer[]> {
    // @ts-ignore
    return ({ items }) => {
      return items;
    };
  }
}
