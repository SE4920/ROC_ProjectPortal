import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectCreationComponent } from './project-creation/project-creation.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectViewComponent } from './project-view/project-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    DashboardComponent,
    ProjectCreationComponent,
    ProjectViewComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule
],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}

