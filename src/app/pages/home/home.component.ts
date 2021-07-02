import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id_menu: any = 1;

  constructor(private nbMenuService: NbMenuService,) { }

  ngOnInit() {
    const self = this;
    self.nbMenuService.onItemClick().subscribe(response => {
      if (response.tag === 'left-menu') {
        console.log(response.item)
        self.id_menu = response.item['iIDMenu'];
      }
    });
    
  }

}
