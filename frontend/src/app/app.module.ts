import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';
import { AdminMainPageComponent } from './views/admin/admin-main-page/admin-main-page.component';
import { AdminAddSubjectComponent } from './views/admin/admin-add-subject/admin-add-subject.component';
import { AdminAddExamComponent } from './views/admin/admin-add-exam/admin-add-exam.component';
import { LandingComponent } from './views/landing/landing.component';


const routes: Routes = [

  {path:'',redirectTo:'/landing', pathMatch:'full'},
  {path:'landing', component:LandingComponent},
  {path:'admin_main_page', component:AdminMainPageComponent},
  {path:'admin_add_exam', component:AdminAddExamComponent},
  {path:'admin_add_subject', component:AdminAddSubjectComponent}
 

];


@NgModule({
  declarations: [
    AppComponent,
    AdminMainPageComponent,
    AdminAddSubjectComponent,
    AdminAddExamComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
