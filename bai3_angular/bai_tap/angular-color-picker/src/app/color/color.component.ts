import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  changeColor = '#00e067';
  updateColor(color){
    this.changeColor = color;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
