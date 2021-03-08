import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { CustomersComponent } from './customers/customers.component';
import { GridComponent } from './customers/grid/grid.component';
import { CoordinatesCellRendererComponent } from './customers/grid/coordinates-cell-renderer.component';
import { ActionsCellRendererComponent } from './customers/grid/actions-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    GridComponent,
    CoordinatesCellRendererComponent,
    ActionsCellRendererComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
