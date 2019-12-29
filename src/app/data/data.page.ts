import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { LoadingService } from '../loading.sevice';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  uids = [];
  constructor(public db: AngularFireDatabase, private loadingService: LoadingService) { 
    this.loadingService.present();
    firebase.database().ref().on('value', (snap) => {
      let result = snap.val();
      for(let k in result) {
        if(this.uids.includes(k)) continue;
        this.uids.push(k);
      }
      // console.log(result);
    });
    this.loadingService.dismiss();
  }
  ngOnInit() {
  }

}
