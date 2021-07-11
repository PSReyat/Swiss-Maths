import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrate',
  templateUrl: './integrate.component.html',
  styleUrls: ['./integrate.component.css']
})
export class IntegrateComponent implements OnInit {
  poly: string = "";
  integral: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  integrate(poly: string){

  }

}
