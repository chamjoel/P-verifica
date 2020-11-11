import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { prodotti } from './prodotti.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  prodotti: prodotti[];
  ob: Observable<prodotti[]>;
  caricamento: boolean;
  constructor(public http: HttpClient) {
  }
  gino():void{
    this.caricamento=true;
    this.ob=this.http.get<prodotti[]>("https://3000-a7c36099-c869-4135-9726-97c427b93b14.ws-eu01.gitpod.io/api/products");
    this.ob.subscribe(this.getdata);
  }
  getdata(p: prodotti[]):void{
    this.prodotti=p;
    this.caricamento=false;
  }

}

