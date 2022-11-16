import { NgModule, Component, OnInit, Injectable } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatTableDataSource } from '@angular/material/table';

import { FormsModule } from '@angular/forms'; 

import { IUser, CognitoService, IProject, IDashboard } from '../cognito.service';

import { MatExpansionModule } from '@angular/material/expansion'

import { MatTableModule } from '@angular/material/table';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { switchMap, delay } from 'rxjs/operators';

import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  project: IProject;
  loading: boolean;
  user: IUser;

  displayedColumns: string[] = [
    'Projectname',
    'FullName',
    'Contract',
    'Status'
  ]

  Empdata: IDashboard[] = [{
    Projectname: "Project1",
    FullName: "Full Name of NRM",
    Contract: "Contract",
    Status: "In Progress"
  }]

  dataSource = new MatTableDataSource(this.Empdata)

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




