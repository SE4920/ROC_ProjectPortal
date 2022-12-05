import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import{MatIconModule} from '@angular/material/icon'
import{MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatSortModule} from '@angular/material/sort'



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectCreationComponent } from './project-creation/project-creation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectViewComponent } from './projectInfo/project-view/project-view.component';
import { BackgroundComponent } from './projectInfo/background/background.component';
import { HeaderComponentComponent } from './projectInfo/header-component/header-component.component';
import { ImageDocumentationComponent } from './projectInfo/image-documentation/image-documentation.component';
import { ProjectInfoComponentComponent } from './projectInfo/project-info-component/project-info-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    DashboardComponent,
    ProjectCreationComponent,
    ProjectViewComponent,
    BackgroundComponent,
    HeaderComponentComponent,
    ImageDocumentationComponent,
    ProjectInfoComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
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