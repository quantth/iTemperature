import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.sevice';
import {FormGroup, FormControl, Validators } from "@angular/forms";
//ionic storage
import { Storage } from "@ionic/storage";

import { IMqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {

  temperature: number;
  humidity: number;
  array: string[];
  date: Date;
  funny: number;
  constructor(private _mqttService: MqttService, public db: AngularFireDatabase) {
    this.date = new Date();
    // this._mqttService.observe('topic/team17').subscribe((message: IMqttMessage)=>{
    //   this.array = message.payload.toString().trimLeft().split(" ");
    //   this.temperature = parseInt(this.array[0]);
    //   this.humidity = parseInt(this.array[1]);
    //   console.log(this.temperature);
    // });
    firebase.database().ref("humidity").on('value', (snap) => {
      this.humidity = snap.val();
    });
    firebase.database().ref("temperature").on('value', (snap) => {
      this.temperature = snap.val();
    });
    var blink_speed = 500;
    var t = setInterval(function () {
      var ele = document.getElementById('blik');
      ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
    }, blink_speed);
  }
  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 0, retain: true});
  }
  ngOnInit() {
  }

}