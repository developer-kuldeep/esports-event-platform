import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com';
  private userSubject = new BehaviorSubject<any>(null);
  user$: Observable<any> = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(user => this.userSubject.next(user)),
      catchError(this.handleError)
    );
  }

  logout(): void {
    this.userSubject.next(null);
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error; // Replace with better error handling as needed
  }
}
