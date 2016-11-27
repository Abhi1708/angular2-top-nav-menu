import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen: boolean = false;
  
  dropdownMenu: Array<any> = [
    {
      text: 'ORGANIZATION:Bank of American,N.A.(121898)',
      href: 'http://www.google.com'
    },
    {
      text: 'BRANCH: 73209',
      href: 'http://www.google.com'
    },
    {
      text: 'SELLER/SERVICER: 121898',
      href: 'http://www.google.com'
    }
  ];

  dropdownContext: Array<any> = [ 
	  {
	  	text: 'Change User Context'
	  },
  ];


  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  
  toggleTopnav() {
  	this.isOpen = !this.isOpen;
  }
    
}


