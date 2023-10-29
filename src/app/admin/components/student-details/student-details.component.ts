import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HomeitemsService } from 'src/app/services/homeitems.service';
import { StudentsoperationsService } from 'src/app/services/studentsoperations.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  displayedColumns: string[] = ["id", "name", "phone_no", "subjects", "report"];
  dataID: any;
  students_details: any;
  dataSource: any = [];
  studentData = [];
  allData: any[]=[];

  constructor(private api: StudentsoperationsService, private active: ActivatedRoute, private route: Router) {}

  ngOnInit() {
    this.active.paramMap.subscribe((params) => {
      this.dataID = params.get('id');
    });

    this.api.getAllStudents().subscribe({
      next: (res) => {
        this.dataSource = res.all_users;
        this.studentData = this.dataSource.filter((item: any) => {
          if (this.dataID == item.class_name) {
            this.students_details = this.dataID;
            return item;
          }
        });
      },
      error: (err) => {}
    });
  }

  openfun(id: any) {
    this.api.setuserdata(id);
    this.allData = this.api.getUserData();

    this.api.getStudentActivities(this.allData).subscribe({
      next: (res) => {},
      error: (err) => {
        console.log(err);
      }
    });
    this.route.navigate(['/admin/report']);
  }
}