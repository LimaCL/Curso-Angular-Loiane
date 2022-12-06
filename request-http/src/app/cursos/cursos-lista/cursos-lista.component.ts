import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';
import { catchError } from 'rxjs';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  //cursos!: Curso[];

  cursos$!: Observable<Curso[]>;

  error$ = new Subject<boolean>();
  bsModalRef?: BsModalRef;

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  message: string = '';
  cursoSelecionado!: Curso;

  constructor(private service: CursosService,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   // this.service.list().subscribe( dados => this.cursos = dados);
  this.onRefresh();


}

  onRefresh(){
    this.cursos$ = this.service.list()
   .pipe(
    catchError(error => {
      console.error(error);
      //this.error$.next(true);
      this.handleError();
      return empty();
    })
   );
  }

  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar cursos, Tente Novamente mais tarde');
  }

  onEdit(id: number){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(curso: any){
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class : 'modal-sm'});
  }

  confirm():void {
    this.service.remove(this.cursoSelecionado.id)
    .subscribe(
      success => this.onRefresh(),
      error => this.alertService.showAlertDanger('Erro ao deletar curso! Tente novamnte mais tarde!')
    );
    this.deleteModalRef.hide();
  }

  decline(): void{
    this.deleteModalRef.hide();
  }
}
