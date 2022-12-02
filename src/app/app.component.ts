import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Amplify, API } from 'aws-amplify';
import { CognitoService } from './cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'amplify-app';

  isAuthenticated: boolean;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    this.cognitoService.isAuthenticated()
    .then((success: boolean) => {
      this.isAuthenticated = success;
    });
    API.get("SampleAPI", "/dashboard",{})
  .then((response) => {
    // Add your code here
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
  }

  public signOut(): void {
    this.cognitoService.signOut()
    .then(() => {
      this.router.navigate(['/signIn']);
    });
  }

}

