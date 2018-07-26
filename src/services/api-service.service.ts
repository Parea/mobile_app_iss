import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()

export class ApiService {

  private apiUrl: string = 'http://localhostn:8000/api/';
  private options: any;

  constructor(public http: HttpClient) {
    console.log('Hello Apiservice!');
  }

  //====================== Requête GET ======================

  get(url) {

    this.options = {
      headers: new HttpHeaders({

        'Accept': 'application/json',
        'Content-Type': 'application/json'
  
      })
    };

    console.log('options: ', this.options);

    return new Promise(resolve => {
      
      this.http.get(this.apiUrl + url, this.options).subscribe(data => {
        
        resolve(data);

        console.log(data);
      
      }, err => {
        
        console.log(err);
      
      })
    
    })
  
  }

}