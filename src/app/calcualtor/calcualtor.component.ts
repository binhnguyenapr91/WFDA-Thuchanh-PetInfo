import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcualtor',
  templateUrl: './calcualtor.component.html',
  styleUrls: ['./calcualtor.component.scss']
})
export class CalcualtorComponent implements OnInit {
  result : number;
  firstOperand: number;
  secondOperand: number;
  operator: string;

  setFirstOperand(firstOperand) {
    this.firstOperand = Number(firstOperand);
  }

  setSecondOperand(secondOperand) {
    this.secondOperand = Number(secondOperand);
  }

  setOperator(operator) {
    this.operator = operator;
  }

  calculate(){
    switch (this.operator) {
      case '+':
        this.result = this.firstOperand + this.secondOperand;
        break;
      case '-':
        this.result = this.firstOperand - this.secondOperand;
        break;
      case '*':
        this.result = this.firstOperand * this.secondOperand;
        break;
      case '/':
        this.result = this.firstOperand / this.secondOperand;
        break;
    }
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
