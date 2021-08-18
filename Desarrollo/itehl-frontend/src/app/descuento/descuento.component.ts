import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ItehlService } from '../services/crud/itehl.service';

@Component({
  selector: 'app-descuento',
  templateUrl: './descuento.component.html',
})
export class DescuentoComponent implements OnInit {

  descuentoForm!: FormGroup;
  submitted = false;

  modalidades:any[]=[
    {id: 1, descripcion: 'Privado'},
    {id: 2, descripcion: 'Online'},
    {id: 3, descripcion: 'OnDemand'},
  ];

  paises:any[]=[
    {id: 1, descripcion: 'Colombia'},
    {id: 2, descripcion: 'Argentina'},
    {id: 3, descripcion: 'Mexico'},
  ];

  cursos:any[]=[];


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
    return this.descuentoForm.controls;
  }


  crearFormulario(){
    this.descuentoForm = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        modalidad: ['', Validators.required],
        pais: ['', Validators.required],
        descuento: ['', Validators.required],
        curso: ['', Validators.required],
        fecha: ['', Validators.required],
      }
    )
  }

  onSubmit(){
    this.submitted = true;

    if (this.descuentoForm.invalid) {
      return;
    }

    this.itehlService.crearDescuento(this.descuentoForm).subscribe(data=>{
      Swal.fire('Información', 'Registro almacenado correctamente', 'success').then(()=>{
        this.router.navigateByUrl('/descuentos');
      })
    });


  }

  onReset(): void {
    this.submitted = false;
    this.descuentoForm.reset();
  }


  listarCursos(){
    this.itehlService.listarCursos().subscribe(data=>{
      this.cursos = data;
    })
  }


  buscarCursos(event:any){
    this.itehlService.buscarCursos(event.target.value).subscribe(data=>{
      this.cursos = data;
    })
    this.calcularDescuento(event.target.value);
  }


  calcularDescuento(modalidad: any){

    console.log('----',modalidad)

    switch (Number(modalidad)) {
        case 1:
          console.log('entra 1');

          this.descuentoForm.controls['descuento'].setValue(10);
        break;

        case 2:
          this.descuentoForm.controls['descuento'].setValue(20);
        break;

        case 3:
          this.descuentoForm.controls['descuento'].setValue(30);
        break;

      default:
        break;
    }
  }




}
