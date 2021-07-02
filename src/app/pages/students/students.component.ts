import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/api/characters.service';
import { UtilitiesService } from '../../shared/api/utilities.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students_list: any = [];
  students_list_original: any = [];
  sort_orientation: string = 'original';
  search_input: string = null;
  field_sort: string = null;

  constructor(private charactersService: CharactersService,
    private utilitiesService: UtilitiesService) { }

  ngOnInit() {
    this.fnGetStudents();
  }

  fnGetStudents() {
    const self = this;
    self.charactersService.fnHttpGetStudents().subscribe(r => {
      if (r.status == 200) {
        self.students_list = JSON.parse(JSON.stringify(r.body));
        self.students_list_original = JSON.parse(JSON.stringify(r.body));
      }
    }, err => {
      // self.utilitiesService.showToast('top-right', 'danger', '', 'fas fa-radiation-alt');
    });
  }
 
  fnSort(field) {
    const self = this;
    self.field_sort = field;
    self.utilitiesService.sortByField(self.students_list, field, self.sort_orientation, function (resp) {
      self.students_list = resp.collection_final != null ?  resp.collection_final : JSON.parse(JSON.stringify(self.students_list_original));
      self.sort_orientation = resp.orientation;
    });
  }

  filterItems(text_typing) {
    const self = this;
    const toSearch = text_typing.toLowerCase();
    if (toSearch) {
      let students_list_original = JSON.parse(JSON.stringify(self.students_list_original));
      self.utilitiesService.fnFilter(students_list_original, toSearch, function (data_collection) {
        self.students_list = data_collection;
      });
    } else {
      self.students_list = JSON.parse(JSON.stringify(self.students_list_original));
    }
  }
  
}
