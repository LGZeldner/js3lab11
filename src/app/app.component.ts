import { Component } from '@angular/core';
import {isNullOrUndefined} from 'util';
import {Sensor} from './shared/models/sensor.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'js3lab11';
  sensors: Sensor[] = [];
  newSensorName: string;
  newSensorStatus: string;
  sensorsCount: number;
  constructor() {
    this.sensorsCount = 10;
    for (let i = 0; i < this.sensorsCount; i++) {
      this.sensors.push(new Sensor (i, `Датчик_${i}`));
    }
    console.log(this.sensors);
  }
  on_delete_sensor(index: number) {
    this.sensors.splice(index, 1); /* удалили из массива элемент */
  }
  on_add_sensor() {
    this.sensors.push(new Sensor (++this.sensorsCount, this.newSensorName, (this.newSensorStatus === 'true')));
  }
}
