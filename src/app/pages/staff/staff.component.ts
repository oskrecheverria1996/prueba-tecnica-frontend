import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/api/characters.service';
import { UtilitiesService } from '../../shared/api/utilities.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staff_list: any = [];
  staff_list_original: any = [];
  sort_orientation: string = 'original'
  search_input: string = null;
  field_sort: string = null;

  constructor(private charactersService: CharactersService,
    private utilitiesService: UtilitiesService) { }

  ngOnInit() {
    this.fnGetStaff();
  }

  fnGetStaff() {
    const self = this;
    self.charactersService.fnHttpGetStaff().subscribe(r => {
      if (r.status == 200) {
        self.staff_list = JSON.parse(JSON.stringify(r.body));
        self.staff_list_original = JSON.parse(JSON.stringify(r.body));
      }
    }, err => {
      // self.utilitiesService.showToast('top-right', 'danger', '', 'fas fa-radiation-alt');
    });
  }
  
  fnSort(field) {
    const self = this;
    self.field_sort = field;
    self.utilitiesService.sortByField(self.staff_list, field, self.sort_orientation, function (resp) {
      self.staff_list = resp.collection_final != null ?  resp.collection_final : JSON.parse(JSON.stringify(self.staff_list_original));
      self.sort_orientation = resp.orientation;
    });
  }

  filterItems(text_typing) {
    const self = this;
    const toSearch = text_typing.toLowerCase();
    if (toSearch) {
      let staff_list_original = JSON.parse(JSON.stringify(self.staff_list_original));
      self.utilitiesService.fnFilter(staff_list_original, toSearch, function (data_collection) {
        self.staff_list = data_collection;
      });
    } else {
      self.staff_list = JSON.parse(JSON.stringify(self.staff_list_original));
    }
  }
  
}
