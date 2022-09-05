import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from '../models/Channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  channelsUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getChannels() : Observable<Channel[]> {
    return this.http.get<Channel[]>(this.channelsUrl);
  }
}
