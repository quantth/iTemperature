import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.sevice';
import {FormGroup, FormControl, Validators } from "@angular/forms";
//ionic storage
import { Storage } from "@ionic/storage";

import { IMqttMessage, MqttModule, MqttService } from 'ngx-mqtt';


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {

  temperature: String;
  constructor(private _mqttService: MqttService) {
    this._mqttService.observe('testtopic/3').subscribe((message: IMqttMessage)=>{
      this.temperature = message.payload.toString();
      console.log(this.temperature);
    });
  }

  
  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  // constructor(private temperatureService: TemperatureService, private ionicStorage: Storage) {
  
  // }

  // public temperatureForm = new FormGroup({
  //   city: new FormControl('', Validators.required),
  // });
  
  // public temperature;
  // public city;

  // search(formData: FormData){
  //   console.log(formData);
  //   this.ionicStorage.set("city", formData["city"]);
    
  //   this.temperatureService.getTemperatureFromApi("city").subscribe( temperature => {
  //     this.temperature = temperature;
  //     console.log(temperature);
  //   })

  // }

  // getTemperature(){
  //     this.ionicStorage.get("city").then( city => {
  //       if(city === null){
  //         this.temperatureService.getTemperatureFromApi("paris").subscribe( temperature => {
  //           this.temperature = temperature;
  //           console.log(temperature);
  //         })
  //       }else{
  //         this.temperatureService.getTemperatureFromApi(city).subscribe( temperature => {
  //           this.temperature = temperature;
  //           console.log(temperature);
  //         });
  //       }

  //     }).catch(err =>{
  //       console.log(err);
  //     })
   
  // }

  ngOnInit() {
  }

}
