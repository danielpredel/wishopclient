import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/product/search/';

  constructor(private http: HttpClient) { }
  buscar(keyword: string) {
    return this.http.get(this.apiUrl + keyword + '/1234-dany-hardcoded-2023');
  }
}
