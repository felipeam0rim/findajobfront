import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Job } from '../models/job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  http = inject(HttpClient);

  api = 'http://localhost:8080/api/jobs';

  constructor() {}

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.api + '/listAll');
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(this.api + '/' + id);
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(this.api + '/delete/' + id, {
      responseType: 'text' as 'json',
    });
  }

  createJob(enterpriseId: number, job: Job): Observable<string> {
    return this.http.post<string>(this.api + '/save/' + enterpriseId, job, {
      responseType: 'text' as 'json',
    });
  }
  updateJob(jobId: number, job: Job): Observable<string> {
    return this.http.put<string>(this.api + '/update/' + jobId, job, {
      responseType: 'text' as 'json',
    });
  }
  getByEnterpriseId(enterpriseIdid: number): Observable<Job[]> {
    return this.http.get<Job[]>(this.api + '/byEnterprise/' + enterpriseIdid);
  }
}
