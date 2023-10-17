import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BatchComponent } from './components/batch/batch.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import {MatTableModule} from '@angular/material/table';
import { ReportComponent } from './components/report/report.component';
import { MatPaginatorModule} from '@angular/material/paginator';

import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ExamResultsComponent } from './components/exam-results/exam-results.component';
import { DailyClassUpdatesComponent } from './components/daily-class-updates/daily-class-updates.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AddstudentsComponent } from './components/addstudents/addstudents.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { PopupComponent } from './components/shared/popup/popup.component';
import { AddexamComponent } from './components/shared/addexam/addexam.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
@NgModule({
  declarations: [
    AdminHomeComponent,
    NavbarComponent,
    BatchComponent,
    StudentDetailsComponent,
    ReportComponent,
    ExamResultsComponent,
    DailyClassUpdatesComponent,
    AttendanceComponent,
    AddstudentsComponent,
    PopupComponent,
    AddexamComponent,

    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
   MatDialogModule,
   MatSidenavModule,
   MatListModule,
   MatDatepickerModule,
   MatNativeDateModule
  ]
})
export class AdminModule { }
