import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customers1RoutingModule } from './customers1-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    Customers1RoutingModule
  ],
  declarations: [CustomerListComponent]
})
export class Customers1Module { }
