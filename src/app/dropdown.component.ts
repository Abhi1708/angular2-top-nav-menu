import {Directive, Component, Input, HostListener} from '@angular/core';

@Directive({
	selector: 'app-dropdown',
	 host: {'class': 'dropdown', '[class.open]': 'open'}})
export class AppDropdown {
  @Input() open = false;
}

@Component({
  selector: '[app-dropdown-collapse]',
  template: `<ng-content></ng-content>`,
  host: {'class': 'dropdown-collapse', 'aria-haspopup': 'true', '[attr.aria-expanded]': '_dropdown.open'}
})
export class AppDropdowncollapse {
  constructor(private _dropdown: AppDropdown) {}

  @HostListener('click') collapseOpen() {
    this._dropdown.open = !this._dropdown.open;
  }
}