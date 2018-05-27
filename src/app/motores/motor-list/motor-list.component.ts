import { Component, OnInit } from '@angular/core';
import {MotorService}from '../shared/motor.service';
@Component({
  selector: 'app-motor-list',
  templateUrl: './motor-list.component.html',
  styleUrls: ['./motor-list.component.css']
})
export class MotorListComponent implements OnInit {

  constructor(private motorService: MotorService) { }

  ngOnInit() {
  }

}
