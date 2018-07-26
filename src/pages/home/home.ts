import { ApiService } from './../../services/api-service.service';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Produc } from '../../models/Produc.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  producs: any;

  constructor(public navCtrl: NavController, private platform: Platform, private apiservice: ApiService) {
    this.platform.ready().then(() => {
      this.getProducs();
    })
  }
  
  getProducs(){
    this.apiservice.get('producs')
    .then(data => {
      this.producs = data;
      console.log(data)
    });
    console.log('connection réussi !');
  }
}