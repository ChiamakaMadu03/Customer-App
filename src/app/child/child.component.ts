import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ChildService } from '../services/child.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  name! : string;
  subscription: Subscription
  constructor (private childService: ChildService) {
  this.subscription = childService.name$.subscribe((response)=>{this.name = response})
  }
  
  @Input() childInput : string | undefined 

  @Output() nameEmitter = new EventEmitter<string>(); //for output, you have to listen to an event to get data

  displayName(){
  this.nameEmitter.emit('Chiamaka Madu') //function for the event emitter
  }
}


