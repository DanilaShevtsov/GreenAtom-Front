import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IAdminAnswer } from 'src/app/models/admin-answer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  answers: IAdminAnswer[] = [];
  authorized = false;
  jwt:string;

  vacancyForm = new FormGroup({
    title: new FormControl<string>(''),
    preview: new FormControl<string>(''),
    description: new FormControl<string>(''),
    city: new FormControl<string>('')
  });

  authForm = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>('')
  });

  constructor(private readonly adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAnswers().subscribe(resp => {
      this.answers = resp;
      console.log(this.answers);
    });
  }

  redirectQR(vacancyId:string) {
    console.log(vacancyId);
  }

  createVacancy() {
    const title = this.vacancyForm.value.title;
    const preview = this.vacancyForm.value.preview;
    const description = this.vacancyForm.value.description;
    const city = this.vacancyForm.value.city;

    this.adminService.createVacancy({
      title: title as string,
      preview: preview as string,
      description: description as string,
      city: city as string,
    }, this.jwt).subscribe();
  }

  auth() {
    const username = this.authForm.value.username;
    const password = this.authForm.value.password;

    this.adminService.auth({
      username: username as string,
      password: password as string,
    }).subscribe((resp) => {
      this.jwt = resp.access_token;
      console.log(this.jwt);
      this.authorized = true;
    });
  }
}
