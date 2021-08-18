import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ItehlService } from '../services/crud/itehl.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
})
export class CursoComponent implements OnInit {

  cursoForm!: FormGroup;
  submitted = false;
  modalidades:any[]=[
                      {id: 1, descripcion: 'Privado'},
                      {id: 2, descripcion: 'Online'},
                      {id: 3, descripcion: 'OnDemand'},
                    ];


  constructor(
              private formBuilder: FormBuilder,
              private itehlService: ItehlService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }


  get f(): { [key: string]: AbstractControl } {
    return this.cursoForm.controls;
  }


  crearFormulario(){
    this.cursoForm = this.formBuilder.group(
      {
        costo: ['', Validators.required],
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        horas: ['', Validators.required],
        dirigido_a: ['', Validators.required],
        modalidad: ['', Validators.required],
      }
    )
  }

  onSubmit(){
    this.submitted = true;

    if (this.cursoForm.invalid) {
      return;
    }

    this.itehlService.crearCurso(this.cursoForm).subscribe(data=>{
      console.log('Resp: ', data);
      Swal.fire('Información', 'Registro almacenado correctamente', 'success').then(()=>{
        this.router.navigateByUrl('/cursos');
      })
    });


  }

  onReset(): void {
    this.submitted = false;
    this.cursoForm.reset();
  }






}
