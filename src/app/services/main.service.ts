import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/forkJoin";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import { Observable } from 'rxjs';



@Injectable()
export class MainService {
  public static API_PATH = 'http://localhost:3000/api/customers';
  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<any> {
    const url = MainService.API_PATH;
    
    return this.http.get(url)
        .map(res => res)
        .catch(err => this.handleError(err))

        
  }
  

  handleError = (err) => Observable.throw(err.error);
}
