import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Skill} from "../model/Skill";
import {Blog} from "../model/Blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl+'/blogs');
  }
}
