import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { LoadingService } from '../loading.sevice';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  uids = [];
  constructor(public db: AngularFireDatabase, private loadingService: LoadingService, private alertCtrl: AlertController) { 
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

   public async delete(date: string, index: number) {
    console.log(date);
    let alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Do you want to delete this data at '+ date +'?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Buy clicked');
            var dateRef = firebase.database().ref().child(date).remove();
            this.uids.splice(index, 1);
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
