
import { Component, OnInit } from '@angular/core';
import { IProject } from './models/project';
import { ProjectService } from './services/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private readonly projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getAll().subscribe((projects) => {
      this.projects = projects;
      console.log(this.projects);
    });
   }
  projects: IProject[] = [];

}
