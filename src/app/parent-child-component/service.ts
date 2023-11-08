import { catchError, tap } from 'rxjs/operators';
import { UserDetails } from './interface';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class service {
  private baseUrl = 'api/data';

  constructor(private http: HttpClient) {
    http.get(this.baseUrl).subscribe((response) => {
      console.log('baseUrl content:', response);
    });
  }

  getData(): Observable<UserDetails[]> {
    return this.http
      .get<UserDetails[]>(this.baseUrl)
      .pipe(tap((response) => console.log(JSON.stringify(response))));
  }
}
