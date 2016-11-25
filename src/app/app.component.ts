import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
  <ngb-dropdown class="btn-group">
  <li ngb-dropdown-togglee class="btn btn-secondary" type="button">
    Toggle dropdown
  </li>
  <div class="dropdown-menu">
    <a href class="dropdown-item" *ngFor="let menu of dropdownMenu">
      {{menu.text}}
    </a>
  </div>
</ngb-dropdown>

<ngb-dropdown class="btn-group">
  <button ngb-dropdown-togglee  type="button" class="btn btn-secondary">Action</button>
  
  <div class="dropdown-menu">
    <div class="dropdown-item">Action</div>
    <div class="dropdown-item">Another action <br> Something else here</div>
    <div class="dropdown-item">Something else here</div>
    <div class="dropdown-divider"></div>
    <div class="dropdown-item" href="#">Separated link</div>
  </div>
</ngb-dropdown>

<ngb-dropdown>
  <button class="btn btn-secondary" type="button" ngb-dropdown-togglee>
    Dropdown
  </button>
  <div class="dropdown-menu full-width" aria-labelledby="dropdownMenu1">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</ngb-dropdown>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen: boolean = false;
  
  dropdownMenu: Array<any> = [
    {
      text: 'Dynamic 1',
    },
    {
      text: 'Dynamic 2',
    },
    {
      text: 'Dynamic 3'
    }
  ];
  
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
