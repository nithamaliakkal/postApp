import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  uri = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  private handleError(error: any) {
    console.log(error);
    alert('Sorry, something went wrong.');
    return throwError(error);
  }
  getPost() {
    return this.http.get(`${this.uri}`).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  deletePost(id) {
    return this.http.delete(`${this.uri}/${id}`).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  editPost(id) {
    return this.http.get(`${this.uri}/${id}`).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  updatePost(value, id) {
    return this.http.put(`${this.uri}/${id}`, value).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  createPost(value) {
    return this.http.post(this.uri, value).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
}
