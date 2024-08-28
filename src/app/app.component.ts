import { Component } from '@angular/core';
//import { NgFor, NgIf } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title = 'first-angular-app';
  users = DUMMY_USERS;
  selectederId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectederId)!;
  }
  onSelectedUser(id: string) {
    console.log('Selected user with id: ' + id);
    this.selectederId = id;
  }
}
