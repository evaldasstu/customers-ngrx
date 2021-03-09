import { Component } from '@angular/core';
import { GridOptions, ICellRendererParams } from 'ag-grid-community';
import { CoordinatesCellRendererComponent } from './coordinates-cell-renderer.component';
import { ActionsCellRendererComponent } from './actions-cell-renderer.component';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
})
export class GridComponent {
  gridOptions: GridOptions;

  constructor(private customerService: CustomerService) {
    this.gridOptions = {
      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
      },

      columnDefs: [
        { field: 'name', headerName: 'Full name', minWidth: 160 },
        {
          field: 'email',
          cellRenderer: (params: ICellRendererParams) =>
            params.data.email &&
            `<a href="mailto:${params.data.email}">${params.data.email}</a>`,
        },
        { field: 'city' },
        { field: 'street' },
        { field: 'house', maxWidth: 120, type: 'numericColumn' },
        { field: 'zip', maxWidth: 120, type: 'numericColumn' },
        {
          field: 'coordinates',
          sortable: false,
          filter: false,
          type: 'numericColumn',
          valueFormatter: this.coordinatesFormatter,
          cellRendererFramework: CoordinatesCellRendererComponent,
        },
        {
          headerName: '',
          sortable: false,
          filter: false,
          minWidth: 140,
          cellRendererFramework: ActionsCellRendererComponent,
        },
      ],

      // might need (from rxjs example)
      // https://www.ag-grid.com/angular-grid/immutable-data/
      // immutableData: true,
      // getRowNodeId: function (data) {
      //   // needs to return a unique value
      //   return data.id;
      // },

      onGridReady(params): void {
        params.api.sizeColumnsToFit();
        window.onresize = () => {
          params.api.sizeColumnsToFit();
        };
        customerService.getCustomers().subscribe((customers) => {
          if (this.api) {
            this.api.setRowData(customers);
          }
        });
      },
    } as GridOptions;
  }

  coordinatesFormatter(params: ICellRendererParams): number[] {
    return params.value.map((a: number) => a.toFixed(4));
  }

  // From CustomersComponent
  // getCustomers(): void {
  //   this.customerService
  //     .getCustomers()
  //     .subscribe((customers) => (this.customers = customers));
  // }
}
