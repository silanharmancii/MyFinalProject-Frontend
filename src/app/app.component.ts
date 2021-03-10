import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], //birden fazla css eklenebilir.
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Şilan Harmancı';
  //product:any={},any:her veri türü olabilir
 
}

//ts:datayı yönettiğin yer
//angular'da her şey class
