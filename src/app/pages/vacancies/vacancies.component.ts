import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  constructor(private readonly projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getAll().subscribe((projects) => {
      this.projects = projects;
    });
        
    if (this.projects.length) {
      console.log('Data is getted');
    } else {
      console.log('Data is not getted');

    }
   }
  projects: IProject[] = [];

}
