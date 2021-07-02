import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UtilitiesService } from '../../shared/api/utilities.service';
import { AddStudentComponent } from './add-student/add-student.component';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.scss']
})
export class NewStudentsComponent implements OnInit {

  new_students_list: any = [];
  new_students_list_original: any = [];
  search_input: string = null;

  sort_orientation: string = 'original';
  field_sort: string = null;

  constructor(
    private dialogService: NbDialogService,
    private utilitiesService: UtilitiesService,
  ) { }

  ngOnInit() {
    this.fnGetSolicitudes();
  }

  fnGetSolicitudes() {
    this.new_students_list = JSON.parse(localStorage.getItem('solicitudes'));
    this.new_students_list_original = JSON.parse(localStorage.getItem('solicitudes'));
  }
  
  fnShowAddStudent() {
    this.dialogService.open(AddStudentComponent).onClose.subscribe((res) => {
      this.fnGetSolicitudes();
    });
  }
  
  fnSort(field) {
    const self = this;
    self.field_sort = field;
    self.utilitiesService.sortByField(self.new_students_list, field, self.sort_orientation, function (resp) {
      self.new_students_list = resp.collection_final != null ?  resp.collection_final : JSON.parse(JSON.stringify(self.new_students_list_original));
      self.sort_orientation = resp.orientation;
    });
  }

  filterItems(text_typing) {
    const self = this;
    const toSearch = text_typing.toLowerCase();
    if (toSearch) {
      let new_students_list_original = JSON.parse(JSON.stringify(self.new_students_list_original));
      self.utilitiesService.fnFilter(new_students_list_original, toSearch, function (data_collection) {
        self.new_students_list = data_collection;
      });
    } else {
      self.new_students_list = JSON.parse(JSON.stringify(self.new_students_list_original));
    }
  }
  
}
