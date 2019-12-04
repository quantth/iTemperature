import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.sevice';
import {FormGroup, FormControl, Validators } from "@angular/forms";
//ionic storage
import { Storage } from "@ionic/storage";


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
})
export class SensorPage implements OnInit {

  constructor(private temperatureService: TemperatureService, private ionicStorage: Storage) {
  
  }

  public temperatureForm = new FormGroup({
    city: new FormControl('', Validators.required),
  });
  
  public temperature;
  public city;

  search(formData: FormData){
    console.log(formData);
    this.ionicStorage.set("city", formData["city"]);
    
    this.temperatureService.getTemperatureFromApi(formData["city"]).subscribe( temperature => {
      this.temperature = temperature;
      console.log(temperature);
    })

  }


  getTemperature(){
      this.ionicStorage.get("city").then( city => {
        if(city === null){
          this.temperatureService.getTemperatureFromApi("paris").subscribe( temperature => {
            this.temperature = temperature;
            console.log(temperature);
          })
        }else{
          this.temperatureService.getTemperatureFromApi(city).subscribe( temperature => {
            this.temperature = temperature;
            console.log(temperature);
          });
        }

      }).catch(err =>{
        console.log(err);
      })
   
  }

  ngOnInit() {
  }

}
