import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './components/grid/grid.component';
import { CoordinatesComponent } from './components/grid/cell-renderers/cell-renderer-coordinates.component';
import { ActionsComponent } from './components/grid/cell-renderers/cell-renderer-actions.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './components/details/details.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// žiūrėt ar reikia kam nors:
// import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { CustomerService } from './shared/customer.service';
// import { CustomerEffects } from './store/customer.effects';
import { customerReducer } from './store/customer.reducers';
// import { EntityDataService } from '@ngrx/data';
// import { CustomerDataService } from './store/customer-data-service';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import {
  HttpClientInMemoryWebApiModule,
  InMemoryDbService,
} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CustomersComponent } from './components/customers/customers.component';

// DABAR VEIKIA ŠITAS
// const defaultDataServiceConfig: DefaultDataServiceConfig = {
//   root: 'app/customers',
//   timeout: 3000, // request timeout
// };

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CoordinatesComponent,
    ActionsComponent,
    HeaderComponent,
    DetailsComponent,
    CustomerFormComponent,
    DeleteDialogComponent,
    FooterComponent,
    CustomersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    AgGridModule.withComponents([CoordinatesComponent, ActionsComponent]),
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 200,
      passThruUnknownUrl: true,
    }),

    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }), // lazyRender?
    FormlyBootstrapModule,
    // StoreModule.forRoot({ customers: customerReducer }), // !
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    // EffectsModule.forRoot([CustomerEffects]), // !
    EffectsModule.forRoot([]),
    ToastNoAnimationModule.forRoot({
      // timeOut: 100000,
      positionClass: 'toast-bottom-right',
      // preventDuplicates: true,
    }),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    CustomerService,
    BsModalRef, // kažkodėl anksčiau nereikėjo? gal dėl to, kad atisrado dar vienas modulis?
    // CustomerDataService,
    // { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ], // !
  bootstrap: [AppComponent],
})
export class AppModule {}
