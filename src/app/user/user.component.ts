import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import {type User} from './user.model';
import { CardComponent } from "../shared/card/card.component";
//, computed, signal
//import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
//selectedUser = signal(DUMMY_USERS[randomIndex]);
//imagePath = computed(() => '../../assets/users/' + this.selectedUser().avatar )
  @Input({required: true})user!:  User;
  @Input({required:true }) selected!: boolean;
 @Output() select = new EventEmitter<string>();
 
 get imagePath (){
   return '../../assets/users/' + this.user.avatar;
 }
// avatar = input.required <string>();
// name = input.required <string>();

//imagePath =computed(() => '../../assets/users/' + this.avatar);
onSelectUser(){
  // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  this.select.emit(this.user.id);
}
}
