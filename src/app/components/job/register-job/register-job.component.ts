import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../../services/job.service';
import { Router } from '@angular/router';
import { Job } from '../../../models/job';
import { Enterprise } from '../../../models/enterprise';

@Component({
  selector: 'app-register-job',
  imports: [CommonModule, FormsModule],
  templateUrl: './register-job.component.html',
  styleUrl: './register-job.component.scss',
})
export class RegisterJobComponent {
  router = inject(Router);
  jobService = inject(JobService);
  enterprise: Enterprise = JSON.parse(localStorage.getItem('enterprise')!);
  job: Job = new Job();

  createJob() {
    this.jobService.createJob(this.enterprise.id, this.job).subscribe({
      next: (message) => {
        alert('Vaga cadastrada com sucesso!');
        this.router.navigate(['dashboard/joblist']);
      },
      error: (err) => {
        alert('Erro ao cadastrar vaga!');
      },
    });
  }
}
