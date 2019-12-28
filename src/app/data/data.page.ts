import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  uids = [];
  constructor(public db: AngularFireDatabase) { 
    firebase.database().ref().on('value', (snap) => {
      let result = snap.val();
      for(let k in result) {
        this.uids.push(k);
      }
      // console.log(result);
    });
  }

  public showData(params: any): void {
    console.log(params);
  }

  ngOnInit() {
  }

}
