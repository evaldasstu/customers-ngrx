import { Component } from '@angular/core';
import { GridOptions, ICellRendererParams } from 'ag-grid-community';
import { CoordinatesCellRendererComponent } from './coordinates-cell-renderer.component';
import { ActionsCellRendererComponent } from './actions-cell-renderer.component';
import { CUSTOMERS } from '../mock-customers';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
})

export class GridComponent {
  gridOptions: GridOptions;

  constructor() {
    this.gridOptions = {

      frameworkComponents: {
        coordinatesCellRenderer: CoordinatesCellRendererComponent,
        actionsCellRenderer: ActionsCellRendererComponent,
      },

      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true
      },

      columnDefs: [
        { field: 'name', headerName: 'Full name', minWidth: 160 },
        {
          field: 'email', cellRenderer: (params: ICellRendererParams) =>
            params.data.email && `<a href="mailto:${params.data.email}">${params.data.email}</a>`
        },
        { field: 'city' },
        { field: 'street' },
        { field: 'house', maxWidth: 120, type: 'numericColumn' },
        { field: 'zip', maxWidth: 120, type: 'numericColumn' },
        {
          field: 'coordinates', sortable: false, filter: false, type: 'numericColumn',
          valueFormatter: this.coordinatesFormatter, cellRenderer: 'coordinatesCellRenderer'
        },
        {
          headerName: '', sortable: false, filter: false, minWidth: 140,
          cellRenderer: 'actionsCellRenderer'
        }
      ],

      onFirstDataRendered(params): void {
        params.api.sizeColumnsToFit();
        window.onresize = () => {
          params.api.sizeColumnsToFit();
        };
      }
    } as GridOptions;
  }

  coordinatesFormatter(params: ICellRendererParams): number[] {
    return params.value.map((a: number) => a.toFixed(4));
  }

  rowData = CUSTOMERS;
}
