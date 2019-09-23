import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.theme.scss', './playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  selected = 'GET';

  constructor() { }

  ngOnInit() {
  }

}
