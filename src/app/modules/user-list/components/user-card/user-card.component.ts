import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../../../../interfaces/model-interface';
import { UsersService } from '../../../../shared/services/users/users.service';
import { pickUser } from '../../../../store/actions';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  constructor(private store: Store, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }
  editUser(): void {
    this.userService.pickUser(this.user);
    this.router.navigate(['/newUser']);
  }

}
