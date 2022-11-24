import { Component, OnInit } from '@angular/core';
import { DataserviseService } from 'src/app/dataservise.service';
import { InterfaceEczane,APIResponse } from 'src/app/interface-eczane';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataserviseService],
})
export class HomeComponent implements OnInit {
  
  result!: Array<InterfaceEczane>
  constructor(private dataservise: DataserviseService) {
    this.dataservise.getEczane().subscribe((data)=>{
      this.result = data.result
      console.log(this.result)
      console.log(this.result.map)
    })
  }

  ngOnInit(): void {}
}
