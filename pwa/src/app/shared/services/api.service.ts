import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from "@angular/common/http";

import { map, catchError, tap } from "rxjs/operators";
import { BehaviorSubject, Observable, throwError } from "rxjs";

const headers_object = new HttpHeaders();
headers_object.append("Content-Type", "application/json");
headers_object.append("Authorization", "Basic " + btoa("client:client"));
headers_object.append("Access-Control-Allow-Origin", "*");

@Injectable({
  providedIn: "root",
})
export class Api {

  url = "https://72.167.54.207/OrdenesServiciosApi/api";

  private currentOdeSSubject: BehaviorSubject<any>;
  public currentOdeS: Observable<any>;

  constructor(private http: HttpClient) {
    console.log(this.url);
    this.currentOdeSSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("OdeS") || "{}")
    );

    this.currentOdeS = this.currentOdeSSubject.asObservable();
  }

  public get currentOdeSValue() {
    return this.currentOdeSSubject.value;
  }


  getOdeSxAnioInge(anio: any, idIngeniero: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    console.log(JSON.stringify({
      "intAnio": anio,
      "intIngenieroId": idIngeniero,
      "serie": "",
      "Status": "",
      "strMarca": "",
      "strSitio": "",
      "fServicio": "",
      "idCliente": "",
      "localidad": "",
      "strModelo": "",
      "strRegion": "",
      "strEnergias": "",
      "Cliente_Nombre": "",
      "Ingeniero_Nombre": "",
      "strDescripcion": "",
      "strNumContrato": ""
    }));

    return this.http
      // .post<any>('/rest/ordenesdeservicioxAnioInge', {
      .post<any>(this.url + '/ordenesdeservicioxAnioInge', {
        "intAnio": anio,
        "intIngenieroId": idIngeniero,
        "serie": "",
        "Status": "",
        "strMarca": "",
        "strSitio": "",
        "fServicio": "",
        "idCliente": "",
        "localidad": "",
        "strModelo": "",
        "strRegion": "",
        "strEnergias": "",
        "Cliente_Nombre": "",
        "Ingeniero_Nombre": "",
        "strDescripcion": "",
        "strNumContrato": ""
      },
        {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
      .pipe(
        map((user) => {
          return user;
        })
      );
  }

  getMotivosRechzo() {
    return this.http.get<any>(this.url + '/ordenesdeservicioMotivos').pipe(
      map((data) => {
        return data;
      })
    );
  }

  OrdenesDeServicioStatusAsig(idOdeS: any, idStatus: any, idMotivo: any, observaciones: any, idUsuarioAlta: any, idIngeniero: any, fServicio: any) {
    console.log('OrdenesDeServicioStatusAsig_A', JSON.stringify({
      "Id": "0",
      "idOdeS": idOdeS,
      "idStatus": idStatus,
      "idMotivo": idMotivo,
      "observaciones": observaciones,
      "idUsuarioAlta": idUsuarioAlta,
      "idIngeniero": idIngeniero,
      "fServicio": fServicio

    }));


    return this.http.post<any>(this.url + '/ordenesdeservicioStatusAsig',
      {
        "Id": "0",
        "idOdeS": idOdeS,
        "idStatus": idStatus,
        "idMotivo": idMotivo,
        "observaciones": observaciones,
        "idUsuarioAlta": idUsuarioAlta,
        "idIngeniero": idIngeniero,
        "fServicio": fServicio

      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).pipe(
        map((data) => {
          return data;
        })
      );
  }

  OrdenesDeServicioFechaStatus(anio: any, idIngeniero: any, fServicio: any, idEstatus: any) {

    console.log(JSON.stringify({

      "intAnio": anio,
      "intIngenieroId": idIngeniero,
      "serie": "",
      "Status": "",
      "strMarca": "",
      "strSitio": "",
      "fServicio": fServicio,
      "idCliente": "",
      "localidad": "",
      "strModelo": "",
      "strRegion": "",
      "strEnergias": "",
      "Cliente_Nombre": "",
      "Ingeniero_Nombre": "",
      "strDescripcion": "",
      "intStatus": idEstatus,
      "strNumContrato": ""
    }));

    return this.http.post<any>(this.url + '/ordenesdeservicioIngeXFechaxStatus',
      {

        "intAnio": anio,
        "intIngenieroId": idIngeniero,
        "serie": "",
        "Status": "",
        "strMarca": "",
        "strSitio": "",
        "fServicio": fServicio,
        "idCliente": "",
        "localidad": "",
        "strModelo": "",
        "strRegion": "",
        "strEnergias": "",
        "Cliente_Nombre": "",
        "Ingeniero_Nombre": "",
        "strDescripcion": "",
        "intStatus": idEstatus,
        "strNumContrato": ""
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).pipe(
        map((data) => {
          localStorage.setItem("OdeS", JSON.stringify(data));
          this.currentOdeSSubject.next(data)
          return data;
        })
      );
  }

  OrdenesDeServicioAnioStatus(anio: any, idIngeniero: any, idEstatus: any) {


    console.log(JSON.stringify({

      "intAnio": anio,
      "intIngenieroId": idIngeniero,
      "serie": "",
      "Status": "",
      "strMarca": "",
      "strSitio": "",
      "fServicio": "",
      "idCliente": "",
      "localidad": "",
      "strModelo": "",
      "strRegion": "",
      "strEnergias": "",
      "Cliente_Nombre": "",
      "Ingeniero_Nombre": "",
      "strDescripcion": "",
      "intStatus": idEstatus,
      "strNumContrato": ""
    }));

    return this.http.post<any>(this.url + '/ordenesdeservicioxAnioIngeStatus',
      {

        "intAnio": anio,
        "intIngenieroId": idIngeniero,
        "serie": "",
        "Status": "",
        "strMarca": "",
        "strSitio": "",
        "fServicio": "",
        "idCliente": "",
        "localidad": "",
        "strModelo": "",
        "strRegion": "",
        "strEnergias": "",
        "Cliente_Nombre": "",
        "Ingeniero_Nombre": "",
        "strDescripcion": "",
        "intStatus": idEstatus,
        "strNumContrato": ""
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).pipe(
        map((data) => {
          localStorage.setItem("OdeS", JSON.stringify(data));
          this.currentOdeSSubject.next(data);
          return data;
        })
      );
  }

  UltimoprocesodecierrexIdOs(idOrden: any) {
    return this.http.post<any>(this.url + '/UltimoprocesodecierrexIdOs',
      {
        "intOSId": idOrden,
        "strUrl": "",
        "strExtension": "",
        "strComentario": "",
        "strprocesocierre": ""
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).pipe(
        map((data) => {
          return data;
        })
      );
  }

  AltaProcesoCierreOs(file: any, strNotas: any, strExtension: any, id: any, intprocesocierreid: any, intOSId: any) {

    const formData = new FormData();
    formData.append('Archivo', file);
    formData.append('strExtension', strExtension);
    formData.append('id', id);
    formData.append('intprocesocierreid', intprocesocierreid);
    formData.append('intOSId', intOSId);
    formData.append('strNotas', strNotas);

    return this.http.post<any>(this.url + '/AltaProcesoCierreOs', formData,
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).pipe(
        map((data) => {
          return data;
        })
      );
  }

  OrdenesdeServicioCerrar(intOSId: any) {
    return this.http.put<any>('https://72.167.54.207/OrdenesServiciosApi/api/OrdenesdeServicioCerrar/' + intOSId,
      {
        "id": intOSId
      }).pipe(
        map((data) => {
          return data;
        })
      );
  }

}