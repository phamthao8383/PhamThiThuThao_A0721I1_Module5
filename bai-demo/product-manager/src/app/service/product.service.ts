import { Injectable } from '@angular/core';
import {IProduct} from '../model/IProduct';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: IProduct[] = [];

  // constructor(private _httpClient: HttpClient) { }
  // getAll(): Observable<IProduct[]>{
  //   return this._httpClient.get<IProduct[]>(API_URL + '/product');
  // }

  constructor(private _httpClient:HttpClient) {
  }

  getAll(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(API_URL + '/NguoiBenh');
  }
  save(value): Observable<IProduct> {
    return this._httpClient.post<IProduct>(API_URL + '/NguoiBenh', value);
  }
  findById(id): Observable<IProduct> {
    return this._httpClient.get<IProduct>(API_URL + '/NguoiBenh' + '/' + id);
  }

  update(id, product1): Observable<IProduct> {
    return this._httpClient.put<IProduct>(API_URL + '/NguoiBenh' + '/' + id, product1);
  }

  delete(id: number): Observable<IProduct> {
    return this._httpClient.delete<IProduct>(API_URL + '/NguoiBenh/' + id);
  }

}
