import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CharactersComponent } from '../characters/characters.component';
import { StudentsComponent } from '../students/students.component';
import { StaffComponent } from '../staff/staff.component';
import { NewStudentsComponent } from '../new-students/new-students.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NbDialogModule } from '@nebular/theme';

import { AgePipe } from '../../shared/pipes/age.pipe';

@NgModule({
  declarations: [HomeComponent, CharactersComponent, StudentsComponent, StaffComponent, NewStudentsComponent, AgePipe],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ThemeModule,
    NbDialogModule
  ]
})
export class HomeModule { }
