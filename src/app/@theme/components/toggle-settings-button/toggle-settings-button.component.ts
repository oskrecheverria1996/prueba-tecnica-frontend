import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { StateService } from '../../../@core/utils';

@Component({
  selector: 'ngx-toggle-settings-button',
  styleUrls: ['./toggle-settings-button.component.scss'],
  template: `
    <div id="settings_main_div" class="m-0 p-0">
      <button class="toggle-settings" id="toggle-settings"
              (click)="toggleSettings()"
              [class.expanded]="expanded"
              [class.sidebar-end]="sidebarEnd"
              [class.was-expanded]="wasExpanded"
      >
      </button>
    </div>
  `,
})
export class ToggleSettingsButtonComponent {

  sidebarEnd = false;
  expanded = false;
  wasExpanded = false;
  constructor(private sidebarService: NbSidebarService, protected stateService: StateService) {
    this.stateService.onSidebarState()
      .subscribe(({id}) => {
        this.sidebarEnd = id === 'end';
      });
  }

  ngOnInit() {
  }


  toggleSettings() {
    this.sidebarService.toggle(false, 'settings-sidebar');
    this.expanded = !this.expanded;
    this.wasExpanded = true;
  }
}
