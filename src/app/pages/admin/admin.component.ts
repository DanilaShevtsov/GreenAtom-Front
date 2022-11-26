import { Component, OnInit } from '@angular/core';
import { IAdminAnswer } from 'src/app/models/admin-answer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  answers: IAdminAnswer[] = [];
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
}
