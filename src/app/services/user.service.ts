import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, Observer, of} from "rxjs";
import {User} from "../../models/user";

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {
    //
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:5030/users')
  }

}
