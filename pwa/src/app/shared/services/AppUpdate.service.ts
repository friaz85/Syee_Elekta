import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {
  isNewVersionAvailable: boolean = false;

  constructor(private readonly updates: SwUpdate) {

    this.checkForUpdate();
    // this.updates.checkForUpdate.subscribe((event : any) => {
    //   this.showAppUpdateAlert();
    // });
  }

  async checkForUpdate() {
    this.isNewVersionAvailable = await this.updates.checkForUpdate();
    if (this.isNewVersionAvailable) {
      this.showAppUpdateAlert();
    }
  }

  showAppUpdateAlert() {
    // const header = 'App Update available';
    // const message = 'Choose Ok to update';
    // const action = this.doAppUpdate;
    // const caller = this;
    // Use MatDialog or ionicframework's AlertController or similar
    // presentAlert(header, message, action, caller);
    Swal.fire({
      icon: "info",
      title: "Atención",
      text: "Existe una nueva versión de la aplicación, por favor actualiza para continuar.",
      allowOutsideClick: false
    }).then(
      (result) => {
        this.doAppUpdate;
      }
    );
  }

  doAppUpdate() {
      this.updates.activateUpdate().then(() => document.location.reload());
    }

}
