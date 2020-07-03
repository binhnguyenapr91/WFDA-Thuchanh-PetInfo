import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.scss']
})
export class ChangeColorComponent implements OnInit {
  color:'#E3C866';

  changeColor(value){
    this.color = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
