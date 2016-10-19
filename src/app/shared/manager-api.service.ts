import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
@Injectable()

export class ManagerApi {

  private baseUrl = 'https://cpms-api.herokuapp.com/api'

  constructor(private http: Http) {}


  getDiaries() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/diaries`)
        .subscribe(res => resolve(res))
    })
  }
}
