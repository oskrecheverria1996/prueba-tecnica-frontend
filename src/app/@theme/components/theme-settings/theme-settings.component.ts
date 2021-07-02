import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbSidebarService, NbMenuService, NbDialogService } from '@nebular/theme';

/* ************+ Import module auth ************ */
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

import { StateService, LayoutService } from '../../../@core/utils';
declare var $: any;

@Component({
  selector: 'ngx-theme-settings',
  styleUrls: ['./theme-settings.component.scss'],
  templateUrl: './theme-settings.component.html',
  // template: `
  //   <h6>LAYOUTS</h6>
  //   <div class="settings-row">
  //     <a *ngFor="let layout of layouts"
  //        href="#"
  //        [class.selected]="layout.selected"
  //        [attr.title]="layout.name"
  //        (click)="layoutSelect(layout)">
  //       <i [attr.class]="layout.icon"></i>
  //     </a>
  //   </div>
  //   <h6>SIDEBAR</h6>
  //   <div class="settings-row">
  //     <a *ngFor="let sidebar of sidebars"
  //        href="#"
  //        [class.selected]="sidebar.selected"
  //        [attr.title]="sidebar.name"
  //        (click)="sidebarSelect(sidebar)">
  //       <i [attr.class]="sidebar.icon"></i>
  //     </a>
  //   </div>
  //   <div class="settings-row">
  //     <div class="switcher">
  //       <ngx-layout-direction-switcher></ngx-layout-direction-switcher>
  //     </div>
  //   </div>
  // `,
  // providers:  [DashboardComponent],
})
export class ThemeSettingsComponent implements OnInit {

  layouts = [];
  sidebars = [];


  current_payload: string = null;
  projects: any = null;
  user: any = null;
  id_project: any = null;
  name_project: any = null;
  id_user_plans: any = null;
  list_versions: any = [];
  versions_original_collection: any = [];
  display_form: any = false;

  sidebarEnd = false;
  expanded = false;
  wasExpanded = false;

  id_company: any = null;
  id_version: any = null;
  company_name: string = null;

  selectedItem: any = null;
  bPaused: boolean = false;
  lang_nav: any = window.navigator.language;
  DATA_LANG: any = null;

  constructor(
    protected stateService: StateService,
    private authService: NbAuthService,
    public router: Router,
    private route: ActivatedRoute,
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private layoutService: LayoutService,
    private dialogService: NbDialogService,
    ) {

    this.stateService.getLayoutStates()
      .subscribe((layouts: any[]) => this.layouts = layouts);

    this.stateService.getSidebarStates()
      .subscribe((sidebars: any[]) => this.sidebars = sidebars);
  }

  ngOnInit() {
    const self = this;
    
    /* *** START - JQuery definition *** */
    
    // JQuery ready
    $(document).ready(function () {

      $('.pgp-class_switch_version').click(function () {
        $('.pgp-class_switch_version').removeClass('pgp-list_active');
        var num_item = $(this).attr('name');
        $('#pgp-id_content_version_' + num_item).addClass('pgp-list_active');
      });
    });
    /* **** END - JQuery definition **** */

    self.stateService.getLayoutStates()
      .subscribe((layouts: any[]) => self.layouts = layouts);

    self.stateService.getSidebarStates()
      .subscribe((sidebars: any[]) => self.sidebars = sidebars);

    self.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid() && this.current_payload == null) {
        // here we receive a payload from the token and assigne it to our `user` variable
        self.current_payload = token.getValue();
        self.user = token.getPayload();
      }
    });
  }
  
  toggleSidebar() {
    const self = this;
    self.sidebarService.toggle(true, 'menu-sidebar');
    self.layoutService.changeLayoutSize();
  }

  layoutSelect(layout: any): boolean {
    this.layouts = this.layouts.map((l: any) => {
      l.selected = false;
      return l;
    });

    layout.selected = true;
    this.stateService.setLayoutState(layout);
    return false;
  }

  sidebarSelect(sidebars: any): boolean {
    this.sidebars = this.sidebars.map((s: any) => {
      s.selected = false;
      return s;
    });

    sidebars.selected = true;
    this.stateService.setSidebarState(sidebars);
    return false;
  }

  toggleSettings() {
    this.sidebarService.toggle(false, 'settings-sidebar');
    this.expanded = !this.expanded;
    this.wasExpanded = true;
  }

}
