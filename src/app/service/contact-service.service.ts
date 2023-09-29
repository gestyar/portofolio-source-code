import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private _urlSendEmail: string = `${environment.apiUrl}/sendMail`;
  constructor(
    private http: HttpClient,
  ) { }
  
  apiSendEmail(data: any): Observable<any>{
    return this.http.post(this._urlSendEmail, data)
    .pipe(
      catchError(this.handleError),
      tap()
    );
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes)
    let errorMessage = 'An unknown error occured!';
    if(errorRes['status'] == 401){
      errorMessage = 'Unautorize'
      return throwError(() => new Error(errorMessage));
    } else {
      return throwError(() => new Error(errorMessage));
    }
  }
}
