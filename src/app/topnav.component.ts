import { Component } from '@angular/core';

@Component({
  selector: 'app-topnav',
  template: `<ul>
    <li class="main btn" *ngFor="let item of items; let i = index" (click)="showSubMenu(item, i)">
      {{item.title}}
    </li>
  
  <div style="clear:both;"></div>
  
        <li [ngStyle]="subLeft" class="sub" *ngFor="let sublink of sublinks">
           <a class="btn dropdown-item" [href]="sublink.href" target="{{sublink.target}}">{{sublink.title}}</a>
        </li>
    </ul>`,
   styleUrls: ['./app.component.css']
})



export class AppTopnav {
	subLeft = {'padding-left':'0px'};
  sublinks:any = null;
  items = [
   {"itemId":1, "title":"Build Form", "description":"Google Search Engine", 
     "sublinks":[
            {"title":"Pair of Contract", "href":"http://google.com/", "target":""},
            {"title":"View Import Results", "href":"http://play.google.com/", "target":"_blank"},
            {"title":"Build Summary", "href":"http://plus.google.com/", "target":"_blank" }
    ]},
    {"itemId":2, "title":"Loans", "description":"Yahoo Search Engine",
        "sublinks":[ 
            {"title":"Loan Pipeline", "href":"http://yahoo.com/", "target":"_blank" },
            {"title":"Create New Loan", "href":"http://sports.yahoo.com/", "target":"_blank" },
            {"title":"Create/View Certification Forms", "href":"http://news.yahoo.com/", "target":"_blank" }
        ]},
    {"itemId":3, "title":"Contracts", "description":"Bing Search Engine", 
         "sublinks":[
            {"title":"Take out cash Contract", "href":"http://www.bing.com", "target":"_blank" },
            {"title":"Remove loans from contract", "href":"http://www.bing.com/entertainment", "target":"_blank" },
            {"title":"Import Guarantor Contract", "href":"http://www.bing.com/videos/browse?FORM=L8SP7", "target":"_blank" }
         ]},
    {"itemId":4, "title":"Settlement", "description":"Dogpile Search Engine",
         "sublinks":[
             {"title":"Form 1034E", "href":"http://www.dogpile.com", "target":"_blank"},
             {"title":"Bill of saleID", "href":"http://www.dogpile.com/info.dogpl.t6.1/support/Faqs", "target":"_blank"},
             {"title":"Note Delivery Cover sheet", "href":"http://m.dogpile.com/support/contactus", "target":"_blank" }
        ]}
  ];

  showSubMenu = function(item, pos) {
        console.log(pos);

        this.sublinks = item.sublinks;
        this.subLeft = {'padding-left':(80 * pos)+'px'};
    };
}