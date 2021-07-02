import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStudentsComponent } from './new-students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { NbDialogModule, NbListModule, NbDatepickerModule } from '@nebular/theme';


@NgModule({
  declarations: [AddStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    ReactiveFormsModule,
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
  ],
  entryComponents: [AddStudentComponent]
})
export class NewStudentsModule { }
