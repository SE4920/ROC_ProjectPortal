import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Amplify, { Auth, JS } from 'aws-amplify';
import { Cache } from 'aws-amplify';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';

export interface IUser {
  username: string;
  email: string;
  password: string;
  showPassword: boolean;
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  employee: IUser;

  private authenticationSubject: BehaviorSubject<any>;

  constructor() {
    Amplify.configure({
      Auth: environment.cognito,
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public signUp(user: IUser): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }

  public confirmSignUp(user: IUser): Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  async signIn(user: IUser) {
    try {
      const u = await Auth.signIn(user.email, user.password);
      console.log("const u:::",JSON.stringify(u));
      user.username = u.username;
      console.log("user.username:::",JSON.stringify(u.username));
      console.log("user.username:::",JSON.stringify(u.name));
      this.employee = user;
    } catch (error) {
      console.log("Error signing in",error)
    }
  }

  // public signIn(user: IUser): Promise<any> {
  //   return Auth.signIn(user.email, user.password)
  //   .then(() => {
  //     this.authenticationSubject.next(true);
  //   });
  // }

  public signOut(): Promise<any> {
    return Auth.signOut()
    .then(() => {
      this.authenticationSubject.next(false);
    });
  }

  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
      // .then((user: any) => {
      //   if (user) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }).catch(() => {
      //   return false;
      // });
    }
  }

  public getUser() {
    // if(this.employee==undefined){
      
    // }else
    return this.employee;
  }

  public updateUser(user: IUser): Promise<any> {
    return Auth.currentUserPoolUser()
    .then((cognitoUser: any) => {
      return Auth.updateUserAttributes(cognitoUser, user);
    });
  }

}