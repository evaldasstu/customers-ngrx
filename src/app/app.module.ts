import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './components/grid/grid.component';
import { CellRendererCoordinatesComponent } from './components/grid/cell-renderer-coordinates.component';
import { CellRendererActionsComponent } from './components/grid/cell-renderer-actions.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './components/details/details.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CellRendererCoordinatesComponent,
    CellRendererActionsComponent,
    HeaderComponent,
    DetailsComponent,
    MessagesComponent,
    CustomerFormComponent,
    DeleteDialogComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    AgGridModule.withComponents([
      CellRendererCoordinatesComponent,
      CellRendererActionsComponent,
    ]),
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),

    // Temp
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
    }),

    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }), // lazyRender?
    FormlyBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
