import { Component, OnDestroy } from '@angular/core';
import { GridOptions, GridApi, GridReadyEvent } from 'ag-grid-community';

import {
  customerGridColumnDefs,
  customerGridDefaultColDef,
} from './customer-grid-column.config';
import { CustomerService } from '../../shared/customer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-grid',
  templateUrl: './customer-grid.component.html',
})
export class CustomerGridComponent implements OnDestroy {
  private gridApi = undefined as GridApi | undefined;

  public gridOptions: GridOptions = {
    columnDefs: customerGridColumnDefs,
    defaultColDef: customerGridDefaultColDef,
    pagination: true,
  };

  constructor(private customerService: CustomerService) {}

  dataSub = {} as Subscription;

  onGridReady(params: GridReadyEvent): void {
    this.customerService.getAll();
    this.gridApi = params.api;

    window.onresize = () => {
      this.gridApi?.sizeColumnsToFit();
    };

    // Visual adjustments
    params.api.hideOverlay(); // not working
    params.api.sizeColumnsToFit();

    // Because of https://github.com/microsoft/TypeScript/issues/43053
    // tslint:disable-next-line
    this.dataSub = this.customerService.entities$.subscribe((rowData) => {
      return this.gridApi?.setRowData(rowData);
    });
  }

  ngOnDestroy(): void {
    window.onresize = null;
    this.gridApi = undefined;
    this.dataSub.unsubscribe();
  }
}
