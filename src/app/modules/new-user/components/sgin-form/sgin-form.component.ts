import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from '../../../../interfaces/model-interface';
import { selectAllUserState, selectCurrentuser, selectusers } from '../../../../store/main-reducer';
import { addUser } from '../../../../store/actions';
import { UsersService } from '../../../../shared/services/users/users.service';
@Component({
  selector: 'app-sgin-form',
  templateUrl: './sgin-form.component.html',
  styleUrls: ['./sgin-form.component.scss']
})
export class SginFormComponent implements OnInit, OnDestroy {
  name = '';
  users: object;
  usersSub: Subscription;
  currrentSub: Subscription;
  storedUsers: string[];
  oldName: string;
  isAlready: boolean;
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['' ],
    phone: [''],
    age: ['']
  });
  constructor(
    public dialogRef: MatDialogRef<SginFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    private fb: FormBuilder,
    private userService: UsersService
    ) {
    }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }
  ngOnInit(): void {
    this.currrentSub = this.store.select(selectAllUserState).subscribe(data => {
      this.name = (data.currentUser);
      this.storedUsers = data.ids;
      this.users = data.entities;
      const user: User = this.users[this.name];
      if (this.name && user) {
        
        this.oldName = user.firstName + '_' + user.lastName;
        this.profileForm.setValue({
          firstName: user.firstName,
          lastName: user.lastName,
          address: user.address,
          phone: user.phone,
          age: user.age
        });
      }
    });
    this.usersSub  = this.store.select(selectusers).subscribe(data => {
      this.storedUsers = (data);
    });
  }

  checkuser(): boolean {
    const newFullName = this.profileForm.get('firstName').value + '_' + this.profileForm.get('lastName').value;
    if (this.storedUsers.includes(newFullName)) {
      return true;
    }
    return false;
  }
  addUser(): void {
    
  }

  editUser(): void {
    const newUser: User = this.profileForm.value;
    this.userService.editUser(newUser, this.oldName);
    this.dialogRef.close();
  }

  create(): void {
    this.isAlready = false;
    if (this.checkuser()) {
      this.isAlready = true;
      return;
    } else {
      const newUser: User = this.profileForm.value;
      this.userService.addUser(newUser);
      this.dialogRef.close();
    }
    console.warn(this.profileForm.value);
    // this.profileForm.reset();
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    if (!this.profileForm.valid) {
      return;
    }
    if (!this.name) {
      this.create();
    } else {
      this.editUser();
    }
  }
}
