import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';

import { StaffModule } from "./staff/staff.module";
import { CharactersModule } from "./characters/characters.module";
import { StudentsModule } from "./students/students.module";


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    HomeModule,

    StaffModule,
    CharactersModule,
    StudentsModule
  ]
})
export class PagesModule { }
