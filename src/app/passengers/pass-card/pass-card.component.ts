import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Ipassenger } from 'src/app/shared/components/models/passenger.interface';
import { PassengersService } from 'src/app/shared/services/passengers.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
  @Input() passObj !: Ipassenger;
  isinEditMode : boolean = false;
  @Output() emmitDeleteFlag : EventEmitter<boolean> = new EventEmitter<boolean>()
  private _passService = inject(PassengersService)
  constructor() { }

  ngOnInit(): void {
  }
  onEditMode(){
    this.isinEditMode = !this.isinEditMode
  }
  onDoneMode(){
    this.isinEditMode =  !this.isinEditMode
    
    }

    OnDeleteMode(){
      this._passService.removePass(this.passObj.id);
      this.emmitDeleteFlag.emit(true)
    }
  }
