import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  id:string = ''
  vacancy: IProject;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.projectService.getVacancy(this.id).subscribe(
      vacancy => {
        this.vacancy = vacancy[0];
      }
    );
  }

}
