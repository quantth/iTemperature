import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.page.html',
  styleUrls: ['./data-detail.page.scss'],
})
export class DataDetailPage implements OnInit {
  private slug: string;
  public dataSnap = [];

  constructor(private route: ActivatedRoute, public db: AngularFireDatabase) {
    this.slug = this.route.snapshot.paramMap.get('id');
    this.getDetail(this.slug);
  }

  ngOnInit() {
    
  }

  public getDetail(param: string): void {
    var dateRef = firebase.database().ref(param);
    var data = [];
    dateRef.on('child_added', function(dataSnapshot) {
      var array = dataSnapshot.val().toString().trimLeft().split(" ");
      var hum: number = parseInt(array[0]);
      var tem: number = parseInt(array[1]);
      var time: number = array[2];
      var icon: string = tem >= 23 ? "ios-nuclear" : "md-happy";
      var feed = {humidity: hum, temperature: tem, time: time, icon: icon};
      data.push(feed);
    });
    this.dataSnap = data;
    console.log(this.dataSnap);
  }

}
