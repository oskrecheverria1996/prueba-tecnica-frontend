import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CharactersComponent } from '../characters/characters.component';
import { StudentsComponent } from '../students/students.component';
import { StaffComponent } from '../staff/staff.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { AgePipe } from '../../shared/pipes/age.pipe';

@NgModule({
  declarations: [HomeComponent, CharactersComponent, StudentsComponent, StaffComponent, AgePipe],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ThemeModule
  ]
})
export class HomeModule { }
