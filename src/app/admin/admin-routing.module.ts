import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { BatchComponent } from './components/batch/batch.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { ReportComponent } from './components/report/report.component';
import { AddstudentsComponent } from './components/addstudents/addstudents.component';
import { ExamResultsComponent } from './components/exam-results/exam-results.component';
import { DailyClassUpdatesComponent } from './components/daily-class-updates/daily-class-updates.component';

const routes: Routes = [
 {
path:"",
redirectTo:"/admin-home-page",pathMatch:"full"
 },
  {
    path:"admin-home-page",component:AdminHomeComponent
  },
  {
    path:"batch",component:BatchComponent
  },
  {
    path:"students-details/:id",component:StudentDetailsComponent
  },
  {
    path:"report",component:ReportComponent
  },
  {
    path:"addstudents",component:AddstudentsComponent
  },{
path:"examresult",component:ExamResultsComponent
  },{
    path:'daily-class-updates',component:DailyClassUpdatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
