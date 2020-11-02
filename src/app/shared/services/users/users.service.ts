import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interfaces/model-interface';
import { addUser, clearuser, pickUser, editUser } from 'src/app/store/actions';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private store: Store) { }

  addUser(user: User): void {
    this.store.dispatch(addUser({newUser: user}));
  }

  clearPickedUser(): void {
    this.store.dispatch(clearuser());
  }

  pickUser(user: User): void {
    this.store.dispatch(pickUser({userPicked: user}));
  }

  editUser(user: User, oldName: string): void {
    this.store.dispatch(editUser({userEdited: {id: oldName, changes: user}}));
  }


}
