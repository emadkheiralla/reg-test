import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData = new BehaviorSubject({})
  currentUserData = this.userData.asObservable();

  constructor() { }

  setData(data: object) {
    this.userData.next(data);
  }

  getData(){
    return this.currentUserData;
  }
}
