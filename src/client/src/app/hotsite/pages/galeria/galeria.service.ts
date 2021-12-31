import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class GaleriaService {
  private apiURL = 'https://api.unsplash.com/photos/?client_id=j6UwPsjDw0jX4PrSSSdcx-FoYf5jJ-Pk13_jMFc1lG4';

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getImages(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL, this.httpOptions)
      .pipe(map(response => response))
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
