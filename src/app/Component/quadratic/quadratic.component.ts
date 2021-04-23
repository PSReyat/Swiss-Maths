import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadratic',
  templateUrl: './quadratic.component.html',
  styleUrls: ['./quadratic.component.css']
})
export class QuadraticComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  quadraticFormula(x: number, y: number, z: number): number{
    let a: number = x;
    let b: number = y;
    let c: number = z;
    let discriminant: number = Math.pow(b, 2) - (4 * a * c);
  }

}
