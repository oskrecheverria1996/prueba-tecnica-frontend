import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule
  ]
})
export class CharactersModule { }
