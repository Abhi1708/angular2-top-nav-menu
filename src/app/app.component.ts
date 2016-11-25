import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen: boolean = false;
  
  dropdownMenu: Array<any> = [
    {
      text: 'Request FM Price Sheet',
    },
    {
      text: 'Add Loans to COntract',
    },
    {
      text: 'View COntract Pipeline'
    }
  ];
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}


