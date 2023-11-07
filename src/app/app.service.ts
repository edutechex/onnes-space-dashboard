import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addAboutUs, addTeam, editAboutUs, editNavItem, editTeam } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  patchValue(datas: any) {
    throw new Error('Method not implemented.');
  }
  baseUrl = "https://api.onnes.in/api";

 public  dashboard:boolean = false;
 public contactusForm:boolean = false;
 public navItem:boolean = false;
 public aboutUs:boolean = false;
 public team:boolean = false;

 public signOut: boolean = false;
 public currentUser:any = [];
 public httpClientMsg: string ="";

  constructor(
    public http: HttpClient
  ) { }

  openSection(sectionName:string){
    this.dashboard = false ;
    this.contactusForm = false;
    this.navItem = false;
    this.aboutUs = false;
    this.team = false;

    switch(sectionName){ 
      case 'dashboard':
        this.dashboard = true;
        break;
      case 'contactusForm':
        this.contactusForm = true;
        break;
      case 'navItem':
        this.navItem = true;
        break;
      case 'aboutUs':
        this.aboutUs = true;
        break;
      case 'team':
        this.team = true;
        break;
    }
  }

  loginDetails(loginForm:any){
    return this.http.post(`${this.baseUrl}/Login/Login`,loginForm);
  }
  getAdminDetails(){
    return this.http.get(`${this.baseUrl}/Login`);
  }

  getContactUsDetails(){
    return this.http.get(`${this.baseUrl}/Form`);
  }

  // add nav item
  addnavItem(navItem:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/NavItem`,navItem);
  }

  //get nav item
  getNavItem(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/NavItem`);
  }
  //update navItem
  updateNavItem(navItem:editNavItem): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/NavItem/${navItem.id}`,navItem);
  }
  //delete navItem
  deleteNavItem(Id:any): Observable<any>{
    return this.http.delete(`${this.baseUrl}/NavItem/${Id}`);
  }

  // add Aboutus
  addAboutUs(addAbout : addAboutUs): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/AboutUs`,addAbout);
  }
  //get aboutus
  getAboutUs(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/AboutUs`);
  }
  //update aboutus
  updateAboutUs(editAbout : editAboutUs): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/AboutUs/${editAbout.id}`,editAbout);
  }
  //delete aboutus
  deleteAboutUs(id:number){
    return this.http.delete(`${this.baseUrl}/AboutUs/${id}`);
  }

  //add team
  addTeam(team : addTeam): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/Team`,team);
  }

  //get team
  getTeam(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/Team`);
  }
  //update team
  updateTeam(team: editTeam): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/Team/${team.id}`,team);
  }
  //delete team
  deleteTeam(id:number){
    return this.http.delete(`${this.baseUrl}/Team/${id}`);
  }
}
