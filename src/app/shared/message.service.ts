import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from './customer.service';

@Injectable({ providedIn: 'root' })
export class MessageService {
  constructor(
    actions$: Actions,
    private toast: ToastrService,
    private customerService: CustomerService
  ) {
    // Because of https://github.com/microsoft/TypeScript/issues/43053
    // tslint:disable-next-line
    actions$.subscribe((action) => {
      const a = action.type.split('/');

      switch (a[a.length - 2] + '/' + a[a.length - 1]) {
        case 'query-all/success':
          this.toast.success('Customers loaded');
          break;
        case 'query-all/error':
          this.toast.error('Customer load error');
          break;
        case 'upsert-one/success':
          this.toast.success('Customer saved');
          break;
        case 'upsert-one/error':
          this.toast.error('Customer save error');
          break;
        case 'delete-one/success':
          this.toast.success('Customer deleted');
          break;
        case 'delete-one/success':
          this.toast.error('Customer delete error');
      }
    });

    // tslint:disable-next-line
    customerService.loading$.subscribe((loading) => {
      loading
        ? this.toast.info('Processing...', '', {
            disableTimeOut: true,
          })
        : this.toast.clear();
    });
  }

  onClearLocalStorage(): void {
    this.toast.success('Local storage cleared');
  }

  // Subscriptions needed all the time - not unsubscribing intentionally
}
