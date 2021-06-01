import { Polynomial } from './../../Model/polynomial';
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

  discriminant(a: number, b: number, c: number): any{
    let discriminant: number = Math.pow(b, 2) - (4 * a * c);

    if(discriminant < 0){
      return "error";
    }else{
      return discriminant;
    }
  }

}
