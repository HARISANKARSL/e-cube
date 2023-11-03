export interface StudentInfo {
    admission_no: string;
    exam_name: string;
    subjects: { [subject: string]: number }; // Use an object for subjects
  }