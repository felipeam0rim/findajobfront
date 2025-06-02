import { Component, inject } from '@angular/core';
import { Job } from '../../../models/job';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobService } from '../../../services/job.service';
import { Enterprise } from '../../../models/enterprise';

@Component({
  selector: 'app-joblist',
  imports: [CommonModule, RouterModule],
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.scss',
})
export class JoblistComponent {
  lista: Job[] = [];
  jobService = inject(JobService);
  enterprise: Enterprise = JSON.parse(localStorage.getItem('enterprise')!);

  ngOnInit() {
    this.jobService
      .getByEnterpriseId(this.enterprise.id)
      .subscribe((jobs: Job[]) => {
        this.lista = jobs;
      });
  }

  getAllJobs() {
    this.jobService.getAllJobs().subscribe({
      next: (value) => {
        this.lista = value;
        console.log(value);
      },
      error: (erro) => {
        alert('Erro na requisição da lista');
      },
    });
  }
}
