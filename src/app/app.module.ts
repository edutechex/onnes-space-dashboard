import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ContactusFormComponent } from './contactus-form/contactus-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { NavItemComponent } from './content-upload/nav-item/nav-item.component';
import { AddOrEditNavItemComponent } from './content-upload/nav-item/add-or-edit-nav-item/add-or-edit-nav-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { AboutusComponent } from './content-upload/aboutus/aboutus.component';
import { AddOrEditAboutusComponent } from './content-upload/aboutus/add-or-edit-aboutus/add-or-edit-aboutus.component';
import { TeamComponent } from './content-upload/team/team.component';
import { AddOrEditTeamComponent } from './content-upload/team/add-or-edit-team/add-or-edit-team.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SideNavbarComponent,
    ContactusFormComponent,
    DashboardComponent,
    NavItemComponent,
    AddOrEditNavItemComponent,
    AboutusComponent,
    AddOrEditAboutusComponent,
    TeamComponent,
    AddOrEditTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
