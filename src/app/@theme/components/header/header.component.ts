import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NbMenuService, NbSidebarService, NbDialogService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
// /* ************+ Import module auth ************ */
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
// import { UtilitiesService } from "../../../shared/api/services/utilities.service";
declare var $: any;

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
  user: any = {};

  userMenu = [
    { title: 'Log out' },
  ];
  
  current_payload: any = null;

  data_received: any = '';

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    // private utilitiesService: UtilitiesService,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
    public router: Router,
    private route: ActivatedRoute,
    private authService: NbAuthService,
    ) {
  }

  ngOnInit() {    
    const self = this;
    
    self.menuService.onItemClick().subscribe((response) => {
      self.onItemSelection(response);
    });
  }

  fnCollapse() {
    $('#sidebar').toggleClass('active');
  }
  
  onItemSelection(response) {
    const self = this;
    switch (response.item.title) {
      case "Log out":
        // self.utilitiesService.fnDestroySessionData(function (res_clean_session) {
        //   if (res_clean_session) {
        //     self.router.navigate(['/auth/login']);
        //   }
        // });
        break;
    }
    if($('.settings-sidebar').hasClass('expanded')){
      $('#toggle-settings').click();
    }
  }

  fnSetDataUser(user_name) {
    this.user['name'] = user_name;
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  fnGoHome() {
    if($('.settings-sidebar').hasClass('expanded')){
      $('#toggle-settings').click();
    }
    this.router.navigate(['/pages/home']);
  }

}
