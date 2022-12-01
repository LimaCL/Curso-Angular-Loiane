import { map, switchMap } from 'rxjs/operators';
import { AlertModalService } from './../../shared/alert-modal.service';
import { CursosService } from '../cursos.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
    ) {
  }

  ngOnInit(): void {

    let registro = null;

    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.service.loadById(id))
    )
    .subscribe(curso => this.updateForm(curso));


    console.log(registro);

    this.form = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(250)])
    });
  }

  get nome() {
    return this.form.get('nome')!;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success => {
          this.modal.showAlertSucess('Curso criado com Sucesso');
          this.location.back();
        },
        error => this.modal.showAlertDanger('Erro ao criar curso!'),
        () => console.log('requeste completo')
      );
    }
  }

  updateForm(curso: any){
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    })
  }

  onCancel() {
    this.submitted = false;
    this.form.reset;
    console.log('Cancel');
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }
}
