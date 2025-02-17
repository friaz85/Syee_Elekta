import { Routes } from '@angular/router';
import { SamplePage1Component } from './sample-page1/sample-page1.component';
import { OrdenesAceptadasComponent } from './ordenes-aceptadas/ordenes-aceptadas.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { OrdenesSinAceptarComponent } from './ordenes-sin-aceptar/ordenes-sin-aceptar.component';

export const pages: Routes = [
    {
        path: '',
        children: [
          {
            path: 'sample-page1',
            component: SamplePage1Component,
            data: {
              title: "Sample-page1",
              breadcrumb: "Default",
            }
          },
          {
            path: 'ordenes-aceptadas',
            component: OrdenesAceptadasComponent,
            data: {
              title: "Órdenes en proceso de cierre",
              breadcrumb: "Órdenes en proceso de cierre",
            }
          },
          {
            path: 'ordenes',
            component: OrdenesComponent,
            data: {
              title: "Órdenes por iniciar",
              breadcrumb: "Órdenes por iniciar",
            }
          },
          {
            path: 'ordenes-sin-aceptar',
            component: OrdenesSinAceptarComponent,
            data: {
              title: "Órdenes por aceptar",
              breadcrumb: "Órdenes por aceptar",
            }
          },
        ]
      }
]
