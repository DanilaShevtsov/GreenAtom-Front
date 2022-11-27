
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactInfoService } from './services/contact-info.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { ProjectService } from './services/projects.service';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    VacancyComponent,
    VacanciesComponent,
    ContactInfoComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactInfoService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
