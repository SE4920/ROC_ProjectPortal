import { Component, OnInit } from '@angular/core';

import { IUser, CognitoService, IProject } from '../cognito.service';


@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.css'],
})

export class ProjectCreationComponent implements OnInit {
  project: IProject;
  loading: boolean;
  user: IUser;

  constructor(private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
    this.project = {} as IProject;
  }

  public ngOnInit(): void {
    this.cognitoService.getUser()
    .then((user: any) => {
      this.user = user.attributes;
    });
  }
  public createProject(): void {     
    this.loading = true;   
  }

  public update(): void {
    this.loading = true;

    this.cognitoService.updateUser(this.user)
    .then(() => {
      this.loading = false;
    }).catch(() => {
      this.loading = false;
    });
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}