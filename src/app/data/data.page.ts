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
  result: any;
  constructor(public db: AngularFireDatabase) { 
    // var semesterRef = firebase.database().ref('28-12-2019');
    // semesterRef.on('child_added', function(courseSnapshot) {
    //   console.log(courseSnapshot.val());
    // });

    firebase.database().ref().on('value', (snap) => {
       this.result = snap.val();
      console.log(this.result);
  });
  }

  ngOnInit() {
  }

}
