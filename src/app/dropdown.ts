import {Directive, Component, Input, HostListener} from '@angular/core';

@Directive({
	selector: 'ngb-dropdown',
	 host: {'class': 'dropdown', '[class.open]': 'open'}})
export class NgbDropdown {
  @Input() open = false;
}

@Component({
  selector: '[ngb-dropdown-togglee]',
  template: `<ng-content></ng-content>`,
  host: {'class': 'dropdown-togglee', 'aria-haspopup': 'true', '[attr.aria-expanded]': '_dropdown.open'}
})
export class NgbDropdownTogglee {
  constructor(private _dropdown: NgbDropdown) {}

  @HostListener('click')
  toggleOpen() {
    this._dropdown.open = !this._dropdown.open;
  }
}