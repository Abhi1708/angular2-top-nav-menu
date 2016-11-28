import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  isOpen: boolean = false;

  orgName: String = 'Bank of American,N.A.(121898)';
  branchNumber: String = '73209';
  sellerNumber: String = '121898';
  

  


  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  
  
}





