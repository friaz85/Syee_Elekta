import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Api } from '../../../shared/services/api.service';
import moment from 'moment';
import { AuthService } from '../../../shared/services/auth.service';
import Swal from "sweetalert2";
import { StepperModule } from 'primeng/stepper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ordenes-aceptadas',
  standalone: true,
  imports: [CommonModule, StepperModule, NgxDropzoneModule, MatStepperModule, FormsModule, NgxSpinnerModule ],
  templateUrl: './ordenes-aceptadas.component.html',
  styleUrl: './ordenes-aceptadas.component.scss'
})
export class OrdenesAceptadasComponent {

  OdeS: any = [];
  steps: any = [];
  files: File[] = [];
  isLinear = false;
  isEditable = false;
  stepIndex = 0;
  txtNotas = '';
  finalizado = false;

  constructor(
    private Api: Api,
    private auth: AuthService,
    private ref: ChangeDetectorRef,
    public router: Router,
    private spinner: NgxSpinnerService
  ) {
    // this.OdeS = this.Api.currentOdeSValue;
    this.OdeS = JSON.parse(localStorage.getItem('OdeS') || '{}')[0];

   
  }

  async ngOnInit() {
    if (this.OdeS != 0) {
      await this.getOrdenes();
    }
  }

  async getOrdenes() {
    this.spinner.show();
    // Escenario 1 por día
    await this.Api.OrdenesDeServicioFechaStatus(moment().format('YYYY'), this.auth.currentUserValue.intUsuarioId, moment(new Date()).format("YYYY-MM-DD"), 5).subscribe(async (dataOdeS) => {
      console.log(dataOdeS);
      // Filtro by intStatus = 5
      const OdeS = dataOdeS.filter((item: any) => item.intStatus == 5);
      if (OdeS.length > 0) {
        // Escenario 1 por día - Estatus 5 (cerrada)
        this.OdeS = dataOdeS[0];
        this.UltimoprocesodecierrexIdOs();
        this.spinner.hide();
        return;
      } else {
        await this.Api.OrdenesDeServicioFechaStatus(moment().format('YYYY'), this.auth.currentUserValue.intUsuarioId, moment(new Date()).format("YYYY-MM-DD"), 4).subscribe(async (dataOdeS4) => {
          console.log(dataOdeS4);
          // Filtro by intStatus = 4
          const OdeS = dataOdeS4.filter((item: any) => item.intStatus == 4);
          if (OdeS.length > 0) {
            // Escenario 1 por día - Estatus 4 (iniciada)
            this.OdeS = dataOdeS4[0];
            this.spinner.hide();
            return;
          } else {
            // await this.Api.OrdenesDeServicioFechaStatus(moment().format('YYYY'), this.auth.currentUserValue.intUsuarioId, moment(new Date()).format("YYYY-MM-DD"), 2).subscribe(async (dataOdeS5) => {
            //   console.log(dataOdeS5);
            //   // Filtro by intStatus = 1
            //   const OdeS = dataOdeS5.filter((item: any) => item.intStatus == 2);
            //   if (OdeS.length > 0) {
            //     // Escenario 1 por día - Estatus 2 (aceptada)
            //     this.OdeS = dataOdeS5[0];
            //     this.spinner.hide();
            //     return;
            //   } else {
               
            //   }
            // });
             // Escenario 1 por año
             await this.Api.OrdenesDeServicioAnioStatus(moment().format('YYYY'), this.auth.currentUserValue.intUsuarioId, 5).subscribe(async (dataOdeS) => {
              console.log(dataOdeS);
              // Filtro by intStatus = 5
              const OdeS = dataOdeS.filter((item: any) => item.intStatus == 5);
              if (OdeS.length > 0) {
                // Escenario 1 por año - Estatus 5 (cerrada)
                this.OdeS = dataOdeS[0];
                this.UltimoprocesodecierrexIdOs();
                this.spinner.hide();
                return;
              } else {
                await this.Api.OrdenesDeServicioAnioStatus(moment().format('YYYY'), this.auth.currentUserValue.intUsuarioId, 4).subscribe(async (dataOdeS4) => {
                  console.log(dataOdeS4);
                  // Filtro by intStatus = 4
                  const OdeS = dataOdeS4.filter((item: any) => item.intStatus == 4);
                  if (OdeS.length > 0) {
                    // Escenario 1 por año - Estatus 4 (iniciada)
                    this.OdeS = dataOdeS4[0];
                    this.spinner.hide();
                    return;
                  } else {
                    this.spinner.hide();
                    Swal.fire({
                      icon: "info",
                      title: "Atención",
                      text: "No existen ordenes de servicio aceptadas o iniciadas.",
                      allowOutsideClick: false
                    }).then(
                      (result) => {
                        this.router.navigate(["/pages/ordenes-sin-aceptar"]);
                      }
                    );
                    // await this.Api.OrdenesDeServicioAnioStatus(moment().format('YYYY'), this.auth.currentUserValue.intUsuarioId, 2).subscribe(async (dataOdeS5) => {
                    //   console.log(dataOdeS5);
                    //   // Filtro by intStatus = 2
                    //   const OdeS = dataOdeS5.filter((item: any) => item.intStatus == 2);
                    //   if (OdeS.length > 0) {
                    //     // Escenario 1 por año - Estatus 1 (aceptada)
                    //     this.OdeS = dataOdeS5[0];
                    //     this.spinner.hide();
                    //     return;
                    //   } else {
                    //     this.spinner.hide();
                    //     Swal.fire({
                    //       icon: "info",
                    //       title: "Atención",
                    //       text: "No existen ordenes de servicio aceptadas o iniciadas.",
                    //       allowOutsideClick: false
                    //     }).then(
                    //       (result) => {
                    //         this.router.navigate(["/pages/ordenes-sin-aceptar"]);
                    //       }
                    //     );
                    //   }
                    // });
                  }
                });
              }
            });
          }
        });
      }
    });

    console.log(this.OdeS);
  }

  async iniciarOrden() {
    let date = this.OdeS.fServicio.split('/');
    let fServicio = date[2] + '-' + date[1] + '-' + date[0];
    console.log('Iniciar Orden', fServicio);
    this.spinner.show();
    let data = await this.Api.OrdenesDeServicioStatusAsig(this.OdeS.intOSId, 4, 0, '', this.auth.currentUserValue.intUsuarioId, this.auth.currentUserValue.intUsuarioId, fServicio).subscribe((data) => {
      console.log(data);
      this.spinner.hide();
      Swal.fire({
        icon: "success",
        title: "Atención",
        text: "Orden iniciada con éxito",
        allowOutsideClick: false
      });
      // this.getOrdenes();
      this.OdeS.intStatus = 4;
      this.ref.detectChanges();
    });
  }

  async procesoCierre() {
    this.spinner.show();
    let date = this.OdeS.fServicio.split('/');
    let fServicio = date[2] + '-' + date[1] + '-' + date[0];
    console.log('Cerrar Orden', fServicio);
    let data = await this.Api.OrdenesDeServicioStatusAsig(this.OdeS.intOSId, 5, 0, '', this.auth.currentUserValue.intUsuarioId, this.auth.currentUserValue.intUsuarioId, fServicio).subscribe((data) => {
      console.log(data);
      this.spinner.hide();
      Swal.fire({
        icon: "success",
        title: "Atención",
        text: "Inicio proceso de cierre",
        allowOutsideClick: false
      }).then(
        (result) => {
          this.getOrdenes();
          this.OdeS.intStatus = 5;
          this.ref.detectChanges();
        }
      );
    });
  }

  async UltimoprocesodecierrexIdOs() {
    this.steps = [];
    this.spinner.show();
    await this.Api.UltimoprocesodecierrexIdOs(this.OdeS.intOSId).subscribe((data) => {
      console.log('steps', data);
      console.log('OdeS', this.OdeS);
      console.log('OdeS length', this.OdeS.length);

      // Ordentar data por data.orden
      this.steps = data.sort((a: any, b: any) => a.orden - b.orden);
      console.log('Steps', this.steps);
      this.stepIndex = this.steps.findIndex((x: any) => x.registrado == 0);
      this.ref.detectChanges();
      this.spinner.hide();
      if (data.filter((x: any) => x.registrado == 1).length == data.length) {
        this.finalizado = true;
      }

    });
  }

  onSelect(event: any) {
    console.log(event);
    this.spinner.show();
    this.files = [];
    this.files.push(...event.addedFiles);
    // Agregar timer de 5 segundos y cerrar spinner
    setTimeout(() => {
      this.spinner.hide();
    }, 5000
    );
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

 async guardarStep(step: any) {
   this.spinner.show();
    console.log(step);
    console.log(this.files[0]);
    let file = this.files[0];
    let ext = this.files[0].name.split('.').pop();
    console.log(ext);

    if (this.files.length == 0) {
      await this.Api.getImagen().subscribe((response) => {
        console.log("Imagen from API", response);
        file = response;
      });
    }
    
    await this.Api.AltaProcesoCierreOs(file, this.txtNotas, ext, 0, step.intprocesocierreid, this.OdeS.intOSId).subscribe((data) => {
      console.log(data);
      this.spinner.hide();
      Swal.fire({
        icon: "success",
        title: "Atención",
        text: "Paso " + step.strprocesocierre + " guardado con éxito.",
        allowOutsideClick: false
      }).then(
        (result) => {
          this.files = [];
          this.txtNotas = '';
          this.getOrdenes();
          this.ref.detectChanges();
        }
      );
      
    });

  }

  async finalizarOrden() {
    this.spinner.show();
    await this.Api.OrdenesdeServicioCerrar(this.OdeS.intOSId).subscribe((data) => {
      console.log(data);
      this.spinner.hide();
      Swal.fire({
        icon: "success",
        title: "Atención",
        text: "Orden finalizada con éxito",
        allowOutsideClick: false
      }).then(
        (result) => {
          window.location.reload();
        }
      );
    })
  }
}
