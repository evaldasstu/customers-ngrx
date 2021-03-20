import {
  Component,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { GridOptions, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from '../../store/customer.model';
import { CustomerService } from '../../shared/customer.service';
import { finalize } from 'rxjs/operators';
import { AppState } from '../../store/app.state';
import { selectAllCustomers } from '../../store/customer.selectors';

import {
  customerGridColumnDefs,
  customerGridDefaultColDef,
} from './grid-column.config';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnDestroy {
  @Input() customers = [] as Customer[];
  @Input() selectedCustomer = {} as Customer;
  @Output() deleted = new EventEmitter<Customer>();
  @Output() selected = new EventEmitter<Customer>();

  private gridApi = undefined as GridApi | undefined;

  public gridOptions: GridOptions = {
    columnDefs: customerGridColumnDefs,
    defaultColDef: customerGridDefaultColDef,
    pagination: true,
  };

  constructor(
    private store: Store<AppState>,
    private customerService: CustomerService
  ) {
    this.customers$ = customerService.entities$;
    this.loading$ = customerService.loading$;
  }

  customers$: Observable<Customer[]>;
  loading$: Observable<boolean>;

  byId(customer: Customer) {
    return customer.id;
  }

  select(customer: Customer) {
    this.selected.emit(customer);
  }

  // getCustomers(): any {
  //   this.customerService.getCustomers().subscribe(
  //     (customers) => (this.customers = customers),
  //     (error) => (this.error = error)
  //   );
  // }

  onGridReady(params: GridReadyEvent): void {
    // this.getCustomers();
    this.gridApi = params.api;

    window.onresize = () => {
      this.gridApi?.sizeColumnsToFit();
    };

    params.api.sizeColumnsToFit();
    params.api.hideOverlay();

    // this.store.select(selectAllCustomers).subscribe((rowData) => {
    //   return this.gridApi?.setRowData(rowData);
    // });
    // this.gridApi?.setRowData(this.customers$)

    // Because of a bug https://github.com/microsoft/TypeScript/issues/43053
    // tslint:disable-next-line
    this.customers$.subscribe((rowData) => {
      return this.gridApi?.setRowData(rowData);
    });

    // this.gridApi?.setRowData(this.customers);
  }
  ngOnDestroy(): void {
    this.gridApi = undefined;
  }

  add(customer: Customer) {
    this.customerService.add(customer);
  }

  delete(customer: Customer) {
    this.customerService.delete(customer);
    this.close();
  }

  // getCustomers() {
  //   this.loading = true;
  //   this.customerService
  //     .getAll()
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe((customers) => (this.customers = customers));
  //   this.close();
  // }

  update(customer: Customer) {
    this.customerService.update(customer);
  }

  close() {
    this.selected = {} as EventEmitter<Customer>;
  }

  // ngOnInit() {
  //   this.getCustomers();
  // }
}
