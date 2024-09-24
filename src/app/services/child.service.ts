import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  name = new Subject<string>(); //Created the subject
  name$ = this.name.asObservable(); //observable that is the store between the name and who is needing it
  setName(data: string) {
    this.name.next(data); //.next to reach the observable
  }
  constructor() { } 
}
