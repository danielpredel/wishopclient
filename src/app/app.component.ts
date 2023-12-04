import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientewishop';

  keyword: string = '';
  products: any = null;
  datos: any = null;
  success: boolean = false;

  constructor(private apiService: ApiService){}

  buscar(){
    this.apiService.buscar(this.keyword).subscribe(
      (response) => {
        this.datos = response;
        this.success = this.datos?.success;
        if(this.success === true){
          this.products = this.datos?.products;
        }
        console.log(this.success);
        console.log(this.products);
      },
      (error) => {
        console.error('Error en la petición GET:', error);
        // alert('error' + error);
      }
    );
  }
}
