import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  toon: boolean = true;
  bgcolor!: string;
  teller: number = 1;

  constructor() { }

  ngOnInit() {

  }

  isChecked(){
    return this.toon ? 'block' : 'none';
  }

  roteer(){
    this.teller = (this.teller == 3) ? 1 : this.teller+1;
  }

  getAfbeelding(){
    return 'assets/massaman' + this.teller + '.jpg';
  }

}
