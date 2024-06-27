import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Skill} from "../model/Skill";


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl + '/skills');
  }
}
