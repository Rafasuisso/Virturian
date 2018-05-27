import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList}from 'angularfire2/database';
import{Motor}from './motor.model';
@Injectable()
export class MotorService {
  motorlist: AngularFireList<any>;
  selectedMotor: Motor = new Motor();
  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.motorlist = this.firebase.list('motores');
    return this.motorlist;
  }

  insertMotor(motor:Motor){
    this.motorlist.push({
      numeroPolo: motor.numeroPolo,
      tensao: motor.tensao,
      registroServico: motor.regimeServico,
      correnteNominal: motor.correnteNominal,
      potenciaNominal: motor.potenciaNominal,
      torqueMaximo: motor.torqueMaximo
    });
  }

  updateMotor(motor: Motor){
    this.motorlist.update(motor.$key,
      {
        numeroPolo: motor.numeroPolo,
        tensao: motor.tensao,
        registroServico: motor.regimeServico,
        correnteNominal: motor.correnteNominal,
        potenciaNominal: motor.potenciaNominal,
        torqueMaximo: motor.torqueMaximo
      })
  }

  deleteMotor($key:string){
    this.motorlist.remove($key);
  }
}
