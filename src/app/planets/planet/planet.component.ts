import { Planet } from './../planet';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'sw-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.less']
})
export class PlanetComponent implements OnInit {
  planet: Planet;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: { planet: Planet }) => {
      this.planet = data.planet;
    })
  }

  back() {
    const extras: NavigationExtras = { relativeTo: this.route, preserveQueryParams: true };
    this.router.navigate(['..'], extras);
  }

}
