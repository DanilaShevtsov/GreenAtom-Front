import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: VacanciesComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: ':id',
    component: VacancyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
