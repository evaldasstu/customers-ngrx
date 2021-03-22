// Column definitions in AG Grid format

import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { CoordinatesComponent } from './cell-renderers/cell-renderer-coordinates.component';
import { ActionsComponent } from './cell-renderers/cell-renderer-actions.component';

export let customerGridDefaultColDef: ColDef = {
  sortable: true,
  filter: true,
  resizable: true,
};

export let customerGridColumnDefs: ColDef[] = [
  { field: 'name', headerName: 'Full name', minWidth: 160 },
  {
    field: 'email',
    cellRenderer: (params: ICellRendererParams) =>
      params.data.email &&
      `<a href="mailto:${params.data.email}">${params.data.email}</a>`,
  },
  { field: 'city' },
  { field: 'street' },
  { field: 'house', maxWidth: 120, type: 'rightAligned' },
  { field: 'zip', maxWidth: 110, type: 'rightAligned' },
  {
    field: 'coordinates',
    sortable: false,
    filter: false,
    type: 'numericColumn',
    cellRendererFramework: CoordinatesComponent,
  },
  {
    headerName: '',
    sortable: false,
    filter: false,
    minWidth: 140,
    maxWidth: 140,
    type: 'rightAligned',
    cellRendererFramework: ActionsComponent,
  },
];
