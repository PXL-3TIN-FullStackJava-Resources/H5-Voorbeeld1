import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stijl',
  templateUrl: './stijl.component.html',
  styleUrls: ['./stijl.component.css']
})
export class StijlComponent implements OnInit {
  hasBorder: boolean = false;
  isRed: boolean = false;
  isBold: boolean = false;

  constructor() { }

  ngOnInit(): void {
  
  }

}
