
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products.service';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { ProjectService } from './services/projects.service';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CreateProductComponent,
    ProjectComponent,
    VacancyComponent,
    VacanciesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductsService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
