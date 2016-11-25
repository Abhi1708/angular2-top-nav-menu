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
  dropdownLoan: Array<any> = [
    {
      text: 'Take out Cash Contract',
    },
    {
      text: 'Remove Loans from Contract',
    },
    {
      text: 'Import Guarantor Contracts'
    }
  ];
  dropdownBill: Array<any> = [
    {
      text: 'Form 1034E',
    },
    {
      text: 'Note Delivery Cover Sheet',
    },
    {
      text: 'Bill of Sale ID'
    }
  ];
  dropdownContract: Array<any> = [
    {
      text: 'Take of Guarantor Contract',
    },
    {
      text: 'Pair of Contract',
    },
    {
      text: 'View Import Contract Results'
    }
  ];
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}


