import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbDialogModule, NbListModule } from '@nebular/theme';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';

import { StaffModule } from "./staff/staff.module";
import { CharactersModule } from "./characters/characters.module";
import { StudentsModule } from "./students/students.module";
import { NewStudentsModule } from "./new-students/new-students.module";


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    NbDialogModule,
    HomeModule,

    StaffModule,
    CharactersModule,
    StudentsModule,
    NewStudentsModule
  ]
})
export class PagesModule { }
