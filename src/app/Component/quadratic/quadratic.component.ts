import { Polynomial } from './../../Model/polynomial';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quadratic',
  templateUrl: './quadratic.component.html',
  styleUrls: ['./quadratic.component.css']
})
export class QuadraticComponent implements OnInit {

  disc: number | string;
  a: number;
  b: number;
  c: number;

  constructor() { }

  ngOnInit(): void {

  }

  discriminant(a: number, b: number, c: number): any{
    
    this.disc = Math.pow(b, 2) - (4 * a * c);

    if(this.disc < 0){
      this.disc = "error"
    }

  }

}
