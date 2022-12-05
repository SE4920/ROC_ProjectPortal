import { API } from 'aws-amplify';
import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Router } from '@angular/router';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  params = {
    headers: {},
    response: true,
    queryStringParameters: {}
  }

  responseArray=[];
  userData=[];
  dataSource = new MatTableDataSource<[]>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor() { }

  ngOnInit(): void {
    API.get("dashboardAPI2", "/dashboard", {}).then(response => {
      this.dataSource=response
    }).catch(error => {
      console.log(error)
    })
  }

}
