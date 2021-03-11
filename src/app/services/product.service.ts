import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products: Product[] = [];
  apiUrl = "https://localhost:44395/api/products/getall";
  constructor(private httpClient: HttpClient) { }
  
  getProducts():Observable<ProductResponseModel> {
   
    return this.httpClient.get<ProductResponseModel>(this.apiUrl)    
    
  }
}

//getProducts için:
//httpClient ile istek yap
//apiUrl için get işlemi yapıp sonucu ProductResponseModel'e map et.
// geleen response için ne yapayım?
//subscribe component'te kullanılır.
//js'de her şey fonksiyon,class yoktur özünde.this en üstteki classa karşılık geliyor
//get<x> : x'e map et demektir.
//Observable<ProductResponseModel> : subscrible olabilir bir response model döneceksin.
  
