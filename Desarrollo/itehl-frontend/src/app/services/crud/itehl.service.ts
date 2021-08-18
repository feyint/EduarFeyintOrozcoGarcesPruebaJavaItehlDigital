import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItehlService {

  private baseUrl = 'http://localhost:8080/curso';
  private baseUrl0 = 'http://localhost:8080/descuento';

  constructor(private http: HttpClient){}


  crearCurso(curso: any): Observable<any>{
    return this.http.post<any>(this.baseUrl, curso.value);
  }


  listarCursos(){
    return this.http.get<any[]>(this.baseUrl+'/list')
                      .pipe(catchError(this.handleError));
  }


  buscarCursos(modalidad: string){
    return this.http.get<any[]>(this.baseUrl+'/list/'+modalidad)
                      .pipe(catchError(this.handleError));
  }


  crearDescuento(descuento: any): Observable<any>{
    return this.http.post<any>(this.baseUrl0, descuento.value);
  }


  listarDescuentos(){
    return this.http.get<any[]>(this.baseUrl0+'/list')
                      .pipe(catchError(this.handleError));
  }



  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Errores recuperando la info.');
  }

}
