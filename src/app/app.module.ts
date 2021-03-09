import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './grid/grid.component';
import { CoordinatesCellRendererComponent } from './grid/coordinates-cell-renderer.component';
import { ActionsCellRendererComponent } from './grid/actions-cell-renderer.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CoordinatesCellRendererComponent,
    ActionsCellRendererComponent,
    HeaderComponent,
    CustomerDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AgGridModule.withComponents([
      CoordinatesCellRendererComponent,
      ActionsCellRendererComponent,
    ]),
    AppRoutingModule,
    HttpClientModule,

    // Temp
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
