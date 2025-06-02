import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Academic } from '../models/academic';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AcademicService {
  http = inject(HttpClient);
  api = 'http://localhost:8080/api/academics';

  constructor() {}

  getAllAcademics(): Observable<Academic[] | User[]> {
    return this.http.get<Academic[]>(this.api + '/listAll');
  }

  getAcademicById(id: number): Observable<Academic | User> {
    return this.http.get<Academic>(this.api + '/' + id);
  }

  deleteAcademic(id: number): Observable<void> {
    return this.http.delete<void>(this.api + '/delete/' + id, {
      responseType: 'text' as 'json',
    });
  }

  createAcademic(academic: Academic | User): Observable<string> {
    return this.http.post<string>(this.api + '/save', academic, {
      responseType: 'text' as 'json',
    });
  }
  updateAcademic(
    academicId: number,
    academic: Academic | User
  ): Observable<string> {
    return this.http.put<string>(this.api + '/update/' + academicId, academic, {
      responseType: 'text' as 'json',
    });
  }

  login(email: string, password: string): Observable<Academic | User> {
    return this.http.post<Academic>(this.api + '/login', { email, password });
  }
}
