import { Component, OnInit } from '@angular/core';

import { IUser, CognitoService } from '../cognito.service';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  loading: boolean;
  user: IUser;

  constructor(private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  public ngOnInit(): void {
    this.cognitoService.getUser()
    .then((user: any) => {
      this.user = user.attributes;
    });
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

  params = {
    headers: {},
    response: true,
    queryStringParameters: {}
  }

  getProjects(){
    API.get("dashboardAPI2", "/dashboard", this.params).then(response => {
      

    }).catch(error => {
      console.log(error)
    })
  }

}
