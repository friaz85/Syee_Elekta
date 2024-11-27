import { filter } from 'rxjs/operators';
import { Api } from './../../../shared/services/api.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { CalendarDateFormatter, CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarModule, CalendarView, DateAdapter, } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, } from 'date-fns';
import { EventColor } from 'calendar-utils';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import moment from 'moment';
import { AuthService } from '../../../shared/services/auth.service';
import Swal from "sweetalert2";
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { CustomDateFormatter } from '../../../providers/custom-date-formatter.provider';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#006666',
    secondary: '#FE6A49',
  },
  blue: {
    primary: '#016580',
    secondary: '#016580',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule,
    CalendarModule,
    FormsModule, FlatpickrModule, NgxSpinnerModule],
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})
export class OrdenesComponent implements OnInit {

  @ViewChild('modalContent', { static: false })


  public modalContent!: TemplateRef<Component>;

  @ViewChild('calendar', { static: false }) calendar: any;


  public view: CalendarView = CalendarView.Month;
  public CalendarView = CalendarView;
  public viewDate: Date = new Date();

  modalData: any = [];

  arrData: any = [];
  arrMotivosRechazo: any = [];
  txtObservaciones = '';
  idMotivo = 0;

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;
  color: string

  constructor(
    private modal: NgbModal,
    private Api: Api,
    private auth: AuthService,
    private ref: ChangeDetectorRef,
    private spinner: NgxSpinnerService,
    public router: Router
  ) {

  }

  ngOnInit(): void {
    this.getOrdenes();
    this.getMotivosRechazo();
  }

  async getOrdenes() {
    this.events = [];
    this.spinner.show();
    await this.Api.OrdenesDeServicioAnioStatus(moment().format('YYYY'), this.auth.currentUserValue.intUsuarioId, 2).subscribe(async (data) => {
    // await this.Api.getOdeSxAnioInge(moment().format('YYYY'), 0).subscribe(async (data) => {
      console.log(data);
      this.arrData = data.filter((x:any) => x.intStatus == 2 || x.intStatus == 4);
      console.log('arrData', this.arrData);
      if (this.arrData.length > 0) {
        for (let i = 0; i < this.arrData.length; i++) {
          let date = data[i].fServicio.split('/');
          this.events.push({
            start: new Date(date[2] + '-' + date[1] + '-' + date[0] + 'T00:00:00'),
            title: data[i].cliente_Nombre + ' - ' + data[i].strSitio + ' - ' + data[i].strDescripcion + ' - ' + data[i].strMarca,
            color: { ...colors['blue'] },
            allDay: true,
            id: data[i].intOSId,
          });
          this.ref.detectChanges();
          this.dayClicked({ date: this.events[i].start, events: this.events });
          if (i == data.length - 1) {
            this.spinner.hide();
          }
        }
      } else {
        this.spinner.hide();
        Swal.fire({
          icon: "warning",
          title: "Atención",
          text: "No existen ordenes de servicio aceptadas.",
        }).then(
          (result) => {
            // this.router.navigate(["/pages/ordenes-sin-aceptar"]);
          }
        );
      }
      this.ref.detectChanges();

    })
  }

  getMotivosRechazo() {
    this.Api.getMotivosRechzo().subscribe((data) => {
      console.log('Motivos', data);
      this.arrMotivosRechazo = data;
    })
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = false;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, evento: any): void {
    console.log(evento[0]);
    // Filtro arrData por event.id

    let event = this.arrData.filter((x: any) => x.intOSId == evento.id)[0];

    this.modalData = event;
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  showModalRechazo(content: any) {
    this.modal.open(content, {
      size: "sm",
      centered: true,
      scrollable: true,
      backdrop: "static",
      keyboard: false,
    });
  }

  async aceptarOrden() {
    console.log('Aceptar Orden', moment(this.arrData.fServicio).format('YYYY-MM-DD'));
    let data = await this.Api.OrdenesDeServicioStatusAsig(this.modalData.intOSId, 2, 0, '', this.auth.currentUserValue.intUsuarioId, this.auth.currentUserValue.intUsuarioId, moment(this.arrData.fServicio).format('YYYY-MM-DD')).subscribe((data) => {
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Atención",
        text: "Orden aceptada con éxito",
      }).then(
        (result) => {
          this.modal.dismissAll();
          this.getOrdenes();
        }
      );;
    });
  }

  async rechazarOrden() {
    console.log('Rechazar Orden', moment(this.arrData.fServicio).format('YYYY-MM-DD'));
    let data = await this.Api.OrdenesDeServicioStatusAsig(this.modalData.intOSId, 3, this.idMotivo, this.txtObservaciones, this.auth.currentUserValue.intUsuarioId, this.auth.currentUserValue.intUsuarioId, moment(this.arrData.fServicio).format('YYYY-MM-DD')).subscribe((data) => {
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Atención",
        text: "Orden rechazada con éxito",
      }).then(
        (result) => {
          this.modal.dismissAll();
          this.getOrdenes();
        }
      );
    });
  }

  async iniciarOrden() {
    // let date = this.OdeS.fServicio.split('/');
    let fServicio = moment(this.arrData.fServicio).format('YYYY-MM-DD');
    console.log('Iniciar Orden', fServicio);
    let data = await this.Api.OrdenesDeServicioStatusAsig(this.modalData.intOSId, 4, 0, '', this.auth.currentUserValue.intUsuarioId, this.auth.currentUserValue.intUsuarioId, moment(this.arrData.fServicio).format('YYYY-MM-DD')).subscribe((data) => {
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "Atención",
        text: "Orden iniciada con éxito",
      }).then(
        (result) => {
          this.modal.dismissAll();
          this.getOrdenes();
        }
      );
      // this.OdeS.intStatus = 4;
      // this.ref.detectChanges();
    });
  }

}
