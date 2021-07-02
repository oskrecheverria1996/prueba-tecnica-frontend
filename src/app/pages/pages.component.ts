import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
// import { SharedService } from '../shared/services/shared.service';
import { UtilitiesService } from '../shared/api/utilities.service';

import { takeWhile, filter } from 'rxjs/operators';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  private alive: boolean = true;
  MENU_ITEMS: any = [];
  data_item: any = null;

  constructor(
    private sidebarService: NbSidebarService,
    private utilitiesService: UtilitiesService,
    private nbMenuService: NbMenuService,
  ) { }

  ngOnInit() {
    // this.sharedService.getEmittedValue()
    //   .subscribe(item => {
    //     this.MENU_ITEMS = item;
    //   });

    const copyMenuVersion = [{
      title: 'Personajes',
      icon: 'fas fa-hat-wizard',
      // link: '/pages/,
      home: false,
      selected: true,
      iIDMenu: 1,
    }, {
      title: 'Estudiantes',
      icon: 'fab fa-leanpub',
      // link: '/pages/,
      home: false,
      selected: false,
      iIDMenu: 2,
    }, {
      title: 'Profesores',
      icon: 'fas fa-chalkboard',
      // link: '/pages/,
      home: false,
      selected: false,
      iIDMenu: 3,
    }, {
      title: 'Solicitudes',
      icon: 'fas fa-magic',
      // link: '/pages/,
      home: false,
      selected: false,
      iIDMenu: 4,
    }];
    const finalMenuVersion: NbMenuItem[] = copyMenuVersion;
    this.MENU_ITEMS = finalMenuVersion;

    this.nbMenuService.onItemClick().subscribe(response => {
      if (response.tag === 'left-menu') {
        this.data_item = response.item;
        this.data_item['selected'] = true;
        localStorage.setItem('item_menu', JSON.stringify(this.data_item));
        this.MENU_ITEMS.forEach((value, key) => {
          if (value['iIDMenu'] === this.data_item.iIDMenu) {
            this.data_item['selected'] = true;
            value['selected'] = true;
          } else {
            value['selected'] = false;
          }
        });
      }
    });

    this.nbMenuService.getSelectedItem('left-menu')
      .pipe(takeWhile(() => this.alive))
      .subscribe((menuBag) => {
      });

    
  }

}
