import { Component, OnInit } from '@angular/core';
import {MotorService}from '../shared/motor.service';
import{NgForm} from '@angular/forms'
@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})
export class MotorComponent implements OnInit {

  constructor(private motorService: MotorService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(motorForm:NgForm){

  }
  
  resetForm(motorForm?:NgForm){
    if(motorForm != null)
      motorForm.reset();
    this.motorService.selectedMotor = {
      $key:null,
      numeroPolo: 0,
      tensao: 0,
      regimeServico: '',
      correnteNominal: '',
      potenciaNominal: '',
      torqueMaximo: ''
    }
  }
}
