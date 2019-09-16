import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SideNavItem {
  name: string;
  subCategory: string[];
}

const SIDE_NAV_ITEMS: SideNavItem[] = [
  {
    name: 'LEARN',
    subCategory: ['Getting started with Visual Recognition', 'About', 'Demo',
      'Video: Visual Recognition in Watson Studio', 'Additional resources']
  },
  {
    name: 'HOW to',
    subCategory: ['Creating a custom model', 'Guidelines for training classifiers', 'Best practices for custom classifiers',
      'Building Cognitive Applications: Visual Recognition (IBM Redbooks)', 'High availability and disaster recovery', 'Beta features']
  },
  {
    name: 'Reference',
    subCategory: ['API reference', 'Supported languages', 'Information security', 'Visual Recognition Activity Tracker events',
      'Migrating', 'Watson SDKs', 'Watson GitHub repos', 'HELP', 'Release notes', 'Feedback', 'Developer community']
  },
  {
    name: 'HELP',
    subCategory: ['Release notes', 'Feedback', 'Developer community']
  }
];

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  sideNavSubject = new BehaviorSubject<SideNavItem[]>(SIDE_NAV_ITEMS);
  sideNav$ = this.sideNavSubject.asObservable();
  selected = false;
  constructor() { }


  ngOnInit() {
  }

}
