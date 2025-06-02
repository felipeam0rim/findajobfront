import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../models/application';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  http = inject(HttpClient);
  api = 'http://localhost:8080/api/applications';

  constructor() {}

  applyToJob(userId: number, jobId: number): Observable<any> {
    const params = new HttpParams().set('userId', userId).set('jobId', jobId);
    return this.http.post(this.api + '/save', null, { params });
  }

  getApplicationByUser(id: number): Observable<Application[]> {
    return this.http.get<Application[]>(this.api + '/user/' + id);
  }

  getApplicationsByJob(jobId: number): Observable<Application[]> {
    return this.http.get<Application[]>(this.api + '/job/' + jobId);
  }

  updateStatus(applicationId: number, status: string): Observable<Application> {
    return this.http.put<Application>(this.api + applicationId + '/status', {
      responseType: 'text' as 'json',
    });
  }
}
