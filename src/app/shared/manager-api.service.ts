import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable'
@Injectable()

export class ManagerApi {

  private baseUrl = 'https://cpms-api.herokuapp.com/api'
  currentDiary: any = {};
  constructor(private http: Http) {}


  getDiaries() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/diaries`)
        .subscribe(res => resolve(res.json()))
    })
  }
  getDiaryData(diaryId) : Observable<any>  {
    return this.http.get(`${this.baseUrl}/diaries/${diaryId}`)
      .map((response: Response) => {
        this.currentDiary = response.json();
        return this.currentDiary;
    })
  }
}
