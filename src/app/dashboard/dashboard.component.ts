import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Router } from '@angular/router';


import { IUser, CognitoService } from '../cognito.service';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit,AfterViewInit {

  loading: boolean;
  user: IUser;
  

  constructor(private cognitoService: CognitoService, private router: Router) {
    this.loading = false;
    this.user = {} as IUser;
  }
  params = {
    headers: {},
    response: true,
    queryStringParameters: {}
  }

  responseArray=[];
  userData=[];
  displayedColumns: string[] = ['ProjectID', 'ProjectName', 'Contract', 'ProjectNumber', 'Status'];
  dataSource = new MatTableDataSource<[]>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public ngOnInit(): void {
    
    this.user = this.cognitoService.getUser();
    console.log("getUser:::", JSON.stringify(this.cognitoService.getUser()));
  


    //API Call
    API.get("dashboardAPI2", "/dashboard", {}).then(response => {
      this.dataSource=response
    }).catch(error => {
      console.log(error)
    })
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

  getprojectView(){
    this.router.navigate(['/background']);

    API.get("dashboardAPI2", "/dashboard", {}).then(response => {
      this.dataSource=response
    }).catch(error => {
      console.log(error)
    })
  }


}

