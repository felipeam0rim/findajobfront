import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../../services/job.service';
import { Router } from '@angular/router';
import { Job } from '../../../models/job';
import { Enterprise } from '../../../models/enterprise';
import { Academic } from '../../../models/academic';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register-job',
  imports: [CommonModule, FormsModule],
  templateUrl: './register-job.component.html',
  styleUrl: './register-job.component.scss',
})
export class RegisterJobComponent {
  router = inject(Router);
  jobService = inject(JobService);
  authService = inject(AuthService);
  job: Job = new Job();

  ngOnInit() {
    const userId = this.authService.getUserId();
    console.log(userId);
    if (!userId) {
      alert('Usuário não autenticado!');
      this.router.navigate(['/login']);
      return;
    }
  }

  createJob() {
    const userId = this.authService.getUserId();
    if (!userId) return;

    this.jobService.createJob(userId, this.job).subscribe({
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
