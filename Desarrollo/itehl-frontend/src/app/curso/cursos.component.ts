import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ItehlService } from '../services/crud/itehl.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];
  modalidades:any[]=[
    {id: 1, descripcion: 'Privado'},
    {id: 2, descripcion: 'Online'},
    {id: 3, descripcion: 'OnDemand'},
  ];

  modalidad: any;

  constructor(
              private itehlService: ItehlService
              ) { }

  ngOnInit(): void {
    this.listarCursos()
  }


  listarCursos(){
    this.itehlService.listarCursos().subscribe(data=>{
      this.cursos = data;
    })
  }


  buscarCursos(event:any){
    console.log(event.target.value)
    this.itehlService.buscarCursos(event.target.value).subscribe(data=>{
      this.cursos = data;
    })
  }



}
