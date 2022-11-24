import { Version } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { InterfaceEczane } from 'src/app/interface-eczane';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
  
})
export class BlockComponent implements OnInit {
  @Input() veri!: InterfaceEczane;
  


  constructor() { }


  

  ngOnInit(): void {
  }

}
