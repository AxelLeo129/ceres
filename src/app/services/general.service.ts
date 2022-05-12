import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  get(endpoint: string): Promise<any> {
    return lastValueFrom(this.http.get(environment.api_url + endpoint));
  }

  post(endpoint: string, data: any): Promise<any> {
    return lastValueFrom(this.http.post(environment.api_url + endpoint, data));
  }

  getAuth(endpoint: string): Promise<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Accept': 'application/json'});
    return lastValueFrom(this.http.get((environment.api_url + endpoint), {headers}));
  }

  postAuth(endpoint: string, data: any): Promise<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Accept': 'application/json'});
    return lastValueFrom(this.http.post((environment.api_url + endpoint), data, {headers}));
  }

  putAuth(endpoint: string, data: any): Promise<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Accept': 'application/json'});
    return lastValueFrom(this.http.put((environment.api_url + endpoint), data, {headers}));
  }

  deleteAuth(endpoint: string): Promise<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Accept': 'application/json'});
    return lastValueFrom(this.http.delete((environment.api_url + endpoint), {headers}));
  }

}
