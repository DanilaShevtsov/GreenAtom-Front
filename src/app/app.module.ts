<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 3fab1abc3ed425d68f4bf342da0561674ec4c44c
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products.service';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CreateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductsService],
=======

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
>>>>>>> 3fab1abc3ed425d68f4bf342da0561674ec4c44c
  bootstrap: [AppComponent]
})
export class AppModule { }
