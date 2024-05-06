import { Injectable, inject } from '@angular/core';
import { Ipassenger } from '../components/models/passenger.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {
  passengerArray: Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];

  private _snackBar = inject(SnackbarService)
  constructor() { }

  fetchAllPassengers():Array<Ipassenger>{
    return this.passengerArray;
  }

 // updatePass(updatedObj: Ipassenger){
    //for(let i = 0; i < this.passengerArray.length; i++){
      //if(this.passengerArray[i].id === updatedObj.id){
       // this.passengerArray[i] = updatedObj;
      //}
   // }
 // }

 updatePass(updatedObj: Ipassenger){
  let getIndex = this.passengerArray.findIndex(pass => pass.id === updatedObj.id);
  let oldPassInfo = this.passengerArray[getIndex];
  this.passengerArray[getIndex] = updatedObj;
  this._snackBar.snackBar(`The fullname from ${oldPassInfo.fullname}is updated to ${updatedObj.fullname}`)
 }

 removePass(deleteID : number){
  let getIndex = this.passengerArray.findIndex(pass => pass.id === deleteID);
  this.passengerArray.splice(getIndex, 1)
 }
}
