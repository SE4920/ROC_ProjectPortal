import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { IUser, CognitoService} from '../cognito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: IUser;
  shortenedName;
  noQuotes;
  constructor(private cognitoService: CognitoService) {   
//    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.user = this.cognitoService.getUser();
    console.log("User:::",JSON.stringify(this.user))

    this.shortenedName = JSON.stringify(this.user.email);
    this.shortenedName.toString();
    this.shortenedName = this.shortenedName.replaceAll('"', '');
    this.shortenedName = this.shortenedName.split("@",1);
    //console.log("shortenedName:::",this.shortenedName)

  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
