import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';
import { LoadingService } from '../loading.sevice';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.page.html',
  styleUrls: ['./data-detail.page.scss'],
})
export class DataDetailPage implements OnInit {
  public slug: string;
  public dataSnap = [];

  constructor(private route: ActivatedRoute, public db: AngularFireDatabase, public loadingService: LoadingService) {
    this.loadingService.present();
    this.slug = this.route.snapshot.paramMap.get('id');
    this.getDetail(this.slug);
    this.loadingService.dismiss();
  }

 

  public getDetail(param: string): void {
    var dateRef = firebase.database().ref(param);
    var data = [];
    dateRef.on('child_added', function(dataSnapshot) {
      var array = dataSnapshot.val().toString().trimLeft().split(" ");
      var key = dataSnapshot.key;
      var hum: number = parseInt(array[0]);
      var tem: number = parseInt(array[1]);
      var time: number = array[2];
      var icon: string = tem >= 23 ? "ios-nuclear" : "md-happy";
      var feed = {timeKey: key, humidity: hum, temperature: tem, time: time, icon: icon};
      data.push(feed);
    });
    this.dataSnap = data;
    console.log(this.dataSnap);
  }

  public delete(timeKey: string, index: number) {
    console.log(timeKey);
    var dateRef = firebase.database().ref(this.slug).child(timeKey).remove();
    this.dataSnap.splice(index, 1);
  }

  ngOnInit() {
    
  }

}
