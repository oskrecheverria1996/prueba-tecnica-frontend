import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/api/characters.service';
import { UtilitiesService } from '../../shared/api/utilities.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  houses_list: any = [
    {name: 'slytherin'},
    {name: 'gryffindor'},
    {name: 'ravenclaw'},
    {name: 'hufflepuff'}
  ]; 
  characters_list: any = [];
  characters_list_original: any = [];

  house_selected: any = {};
  sort_orientation: string = 'original';
  search_input: string = null;
  field_sort: string = null;

  constructor(private charactersService: CharactersService,
      private utilitiesService: UtilitiesService) { }

  ngOnInit() {
    this.house_selected = this.houses_list[0]['name'];
    this.fnGetCharacters(this.house_selected);
  }

  
  fnGetCharacters(house) {
    const self = this;
    self.charactersService.fnHttpGetCharactersByHouse(house).subscribe(r => {
      if (r.status == 200) {
        self.characters_list = JSON.parse(JSON.stringify(r.body));
        self.characters_list_original = JSON.parse(JSON.stringify(r.body));
      }
    }, err => {
    });
  }

  fnChangeHouse(event) {
    this.fnGetCharacters(this.house_selected);
  }

  fnSort(field) {
    const self = this;
    self.field_sort = field;
    self.utilitiesService.sortByField(self.characters_list, field, self.sort_orientation, function (resp) {
      self.characters_list = resp.collection_final != null ?  resp.collection_final : JSON.parse(JSON.stringify(self.characters_list_original));
      self.sort_orientation = resp.orientation;
    });
  }

  filterItems(text_typing) {
    const self = this;
    const toSearch = text_typing.toLowerCase();
    if (toSearch) {
      let characters_list_original = JSON.parse(JSON.stringify(self.characters_list_original));
      self.utilitiesService.fnFilter(characters_list_original, toSearch, function (data_collection) {
        self.characters_list = data_collection;
      });
    } else {
      self.characters_list = JSON.parse(JSON.stringify(self.characters_list_original));
    }
  }
  
}
