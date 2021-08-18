import { Component, OnInit } from '@angular/core';
import { ItehlService } from '../services/crud/itehl.service';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
})
export class DescuentosComponent implements OnInit {

  descuentos: any[] = [];

  constructor(
              private itehlService: ItehlService
              ) { }

  ngOnInit(): void {
    this.listarDescuentos()
  }


  listarDescuentos(){
    this.itehlService.listarDescuentos().subscribe(data=>{
      this.descuentos = data;
    })
  }

}
