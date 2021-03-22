import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AgGridModule } from 'ag-grid-angular';
import { CustomerGridComponent } from './components/customer-grid/customer-grid.component';
import { CoordinatesComponent } from './components/customer-grid/cell-renderers/cell-renderer-coordinates.component';
import { ActionsComponent } from './components/customer-grid/cell-renderers/cell-renderer-actions.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { CustomerService } from './shared/customer.service';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { MessageService } from './shared/message.service';
import { ApiMockModule } from '@ng-stack/api-mock';
import { FakeBackendService } from './store/fake-backend.service';
import { EntityDataService } from '@ngrx/data';
import { CustomerDataTransformService } from './store/customer-data-transform.service';
import { entityConfig } from './store/ngrx-data.config';

@NgModule({
  declarations: [
    AppComponent,
    CustomerGridComponent,
    CoordinatesComponent,
    ActionsComponent,
    HeaderComponent,
    CustomerDetailsComponent,
    CustomerFormComponent,
    DeleteDialogComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    AgGridModule.withComponents([CoordinatesComponent, ActionsComponent]),
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    ToastNoAnimationModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
    }),
    ApiMockModule.forRoot(FakeBackendService, {
      cacheFromLocalStorage: true,
      localStorageKey: 'customers',
    }),
  ],
  providers: [
    CustomerService,
    {
      provide: DefaultDataServiceConfig,
      useValue: {
        root: 'api',
      },
    },

    CustomerDataTransformService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    messageService: MessageService,
    entityDataService: EntityDataService,
    customerDataTransformService: CustomerDataTransformService
  ) {
    entityDataService.registerService(
      'Customers',
      customerDataTransformService
    );
  }
}
