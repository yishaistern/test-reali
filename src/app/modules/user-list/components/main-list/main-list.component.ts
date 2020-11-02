import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, Subscription } from 'rxjs';
import { selectusers, selectusersEntity } from 'src/app/store/main-reducer';
@Component({
  selector: 'app-main-game',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit, OnDestroy {
  userList: Observable<string[]>;
  users: object;
  subsrip: Subscription;
  constructor(private router: Router, private store: Store) { }
  ngOnDestroy(): void {
    this.subsrip.unsubscribe();
  }
  ngOnInit(): void {
    this.userList = this.store.select(selectusers);
    this.subsrip = this.store.select(selectusersEntity).subscribe((data) => {
      this.users = data;
    }) ;
  }

  goto(): void {
    this.router.navigate(['/newUser']);
  }


}
