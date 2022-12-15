import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
<<<<<<< HEAD
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
=======
>>>>>>> da8e857bf49800e978645ff6785e1aeddc04c98a



@NgModule({
  declarations: [
<<<<<<< HEAD
    AlertModalComponent,
    ConfirmModalComponent
=======
    AlertModalComponent
>>>>>>> da8e857bf49800e978645ff6785e1aeddc04c98a
  ],
  imports: [
    CommonModule
  ],
<<<<<<< HEAD
  exports: [AlertModalComponent, ConfirmModalComponent],
  entryComponents: [AlertModalComponent, ConfirmModalComponent]
=======
  exports: [AlertModalComponent],
  entryComponents: [AlertModalComponent]
>>>>>>> da8e857bf49800e978645ff6785e1aeddc04c98a
})
export class SharedModule { }
