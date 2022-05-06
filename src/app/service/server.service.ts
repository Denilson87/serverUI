import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/http';
import { CustomResponse } from '../interface/custom-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  getServers(): Observable <CustomResponse>{
    return this.http.get('http://localhost:8080/server/list')
  }
}
