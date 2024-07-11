import { Component } from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.sass'
})
export class UserComponent {

  public users: User[] = [];

  constructor(private userService: UserService) {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }


}
