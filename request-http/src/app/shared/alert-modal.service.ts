import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

enum AlertTypes{
  DANGER = 'danger',
  SUCCESS = 'sucess'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {



constructor(private modalService: BsModalService) { }

private showAlert(message: string, type: string){
  const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
  bsModalRef.content.type = type;
  bsModalRef.content.message = message;
}

  showAlertDanger(message: string){
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSucess(message: string){
    this.showAlert(message, AlertTypes.SUCCESS);
  }

}
