import {Directive, Input, HostListener} from '@angular/core';

@Directive({selector: 'ngb-dropdown', host: {'class': 'dropdown', '[class.open]': 'open'}})
export class NgbDropdown {
  @Input() open = false;
}

@Directive({
  selector: '[ngb-dropdown-togglee]',
  host: {'class': 'dropdown-togglee', 'aria-haspopup': 'true', '[attr.aria-expanded]': '_dropdown.open'}
})
export class NgbDropdownTogglee {
  constructor(private _dropdown: NgbDropdown) {}

  @HostListener('click')
  toggleOpen() {
    this._dropdown.open = !this._dropdown.open;
  }
}