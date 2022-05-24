import { Injectable } from '@angular/core';
import {ITodo} from '../model/ITodo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: ITodo[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<ITodo[]> {
    return this._httpClient.get<ITodo[]>(API_URL + '/todo');
  }
}
