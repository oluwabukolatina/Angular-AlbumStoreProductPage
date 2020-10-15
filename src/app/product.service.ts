import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/map'
import {Album} from './album';
import {Observable} from 'rxjs/Observable';
import {Product} from './product';


@Injectable()
export class ProductService {
  // create a private class property that’s equal to the st
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json'

  // his is a good practice for injecting an instance of a service into a class.
  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).map((response) => <Product[]>response.json())
  }


}
