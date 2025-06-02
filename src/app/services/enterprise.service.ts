import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Enterprise } from '../models/enterprise';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Academic } from '../models/academic';

@Injectable({
  providedIn: 'root',
})
export class EnterpriseService {
  http = inject(HttpClient);

  api = 'http://localhost:8080/api/enterprises';

  constructor() {}

  getAllEnterprises(): Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(this.api + '/listAll');
  }

  getEnterpriseById(id: number): Observable<Enterprise> {
    return this.http.get<Enterprise>(this.api + '/' + id);
  }

  deleteEnterprise(id: number): Observable<void> {
    return this.http.delete<void>(this.api + '/delete/' + id, {
      responseType: 'text' as 'json',
    });
  }

  createEnterprise(enterprise: Enterprise): Observable<string> {
    return this.http.post<string>(this.api + '/save', enterprise, {
      responseType: 'text' as 'json',
    });
  }
  updateEnterprise(
    enterpriseId: number,
    enterprise: Enterprise
  ): Observable<string> {
    return this.http.put<string>(
      this.api + '/update/' + enterpriseId,
      enterprise,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<Enterprise | User | Academic>(this.api + '/login', {
      email,
      password,
    });
  }
}
