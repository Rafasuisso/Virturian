import { Component, OnInit } from '@angular/core';

import{MotorService}from './shared/motor.service';
@Component({
  selector: 'app-motores',
  templateUrl: './motores.component.html',
  styleUrls: ['./motores.component.css'],
  providers: [MotorService] 
})
export class MotoresComponent implements OnInit {

  constructor(private motorServide: MotorService) { }

  ngOnInit() {
  }

}
