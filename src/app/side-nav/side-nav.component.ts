import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus:boolean=false;
  list=[
     {
       number:'1',
       name:'home',
       icon:'fa-solid  fa-house'

     },
     {
      number:'2',
      name:'analytics',
      icon:'fa-solid fa-chart-line',

    },
    {
      number:'3',
      name:'products',
      icon:'fa-solid fa-box',

    },
    {
      number:'4',
      name:'settings',
      icon:'fa-solid fa-gear',

    },
    {
      number:'5',
      name:'about',
      icon:'fa-solid fa-circle-info',

    },
    {
      number:'6',
      name:'contact',
      icon:'fa-solid fa-phone',

    },

   ]
  constructor() { }

  ngOnInit(): void {
  }

}
