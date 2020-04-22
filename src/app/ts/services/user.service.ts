import { Subject, BehaviorSubject } from 'rxjs';
import { User } from '../model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser$: Subject<User> = new BehaviorSubject<User>(null);

  constructor() {}

  public setCurrentUser(user: User) {
    this.currentUser$.next(user);
  }
}

export const userServiceInjectables: Array<any> = [
  UserService,
];
