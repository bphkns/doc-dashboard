import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./_container.theme.scss', './container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private router: Router, private r: ActivatedRoute) { }

  ngOnInit() {
  }

  goToPlayground() {
    this.router.navigate(['playground'], { relativeTo: this.r.parent });
  }

}
