import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Activity2 } from '../models/Activity2';

@Injectable({
  providedIn: 'root'
})
export class Activity2Service {
  activity2Url: string = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) { }

  getComments() : Observable<Activity2[]> {
    return this.http.get<Activity2[]>(this.activity2Url);
  }
}
