import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private registeredUsers: any[] = [
    { email: 'kareem@gmail.com', password: '123123123' },
  ];
  private usersSubject = new BehaviorSubject<any[]>([]);
  private currentUserSubject = new BehaviorSubject<any>(null);

  registeredUsers$ = this.usersSubject.asObservable();
  currentUser$ = this.currentUserSubject.asObservable();

  addUser(user: any) {
    this.registeredUsers.push(user);
  }

  authenticate(email: string, password: string): boolean {
    const user = this.registeredUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      this.currentUserSubject.next(user);
      return true;
    }
    return false;
  }

  logout() {
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
}
