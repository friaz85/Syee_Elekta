import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Menu {
  headTitle1?: string;
  level?: number;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  id?: number;
  bookmark?: boolean;
  children?: Menu[];
  horizontalList?: boolean;
  items?: Menu[]
}


@Injectable({
  providedIn: 'root'
})
export class NavmenuService {

  public isDisplay!: boolean;
  public language: boolean = false;
  public isShow: boolean = false;
  public closeSidebar: boolean = false;


  constructor() { }

  MENUITEMS: Menu[] = [
    {
      headTitle1: "General",
    },
    // {
    //   id: 1,
    //   level: 1,
    //   title: "Sample Page",
    //   icon: "home",
    //   type: "sub",
    //   active: true,
    //   children: [
    //     { path: '/pages/sample-page1', title: 'Sample-page1', type: 'link' },
		// 		{ path: '/pages/sample-page2', title: 'Sample-page2', type: 'link' },
    //   ],
    // },
  
    // { level: 1, id:2,  path: '/sample-page',  title: "sample-page-3", icon: "support-tickets", active: false, type: "link" },
    { level: 1, id:1,  path: '/pages/ordenes',  title: "Órdenes por iniciar", icon: "fa fa-calendar me-1 text-white", active: false, type: "link" },
    // { level: 1, id:2,  path: '/pages/ordenes-sin-aceptar',  title: "Órdenes por iniciar", icon: "fa fa-file-text-o me-1 text-white", active: false, type: "link" },
    { level: 1, id:2,  path: '/pages/ordenes-sin-aceptar',  title: "Órdenes por aceptar", icon: "fa fa-file-circle-check me-1 text-white", active: false, type: "link" },
    { level: 1, id:3,  path: '/pages/ordenes-aceptadas',  title: "Órdenes en proceso de cierre", icon: "fa fa-file-text-o me-1 text-white", active: false, type: "link" },
  ]

  item = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
