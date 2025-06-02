import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Application } from '../../models/application';
import { ApplicationService } from '../../services/application.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-candidates-list',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './candidates-list.component.html',
  styleUrl: './candidates-list.component.scss',
})
export class CandidatesListComponent {
  lista: Application[] = [];
  jobId!: number;
  jobService = inject(JobService);
  applicationService = inject(ApplicationService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.jobId = Number(this.activatedRoute.snapshot.params['id']);
    if (!this.jobId || this.jobId <= 0) {
      alert('Vaga não encontrada!');
      this.router.navigate(['/dashboard']);
      return;
    }
    this.applicationService.getApplicationsByJob(this.jobId).subscribe({
      next: (applications: Application[]) => {
        this.lista = applications;
        console.log('Candidatos encontrados: ', applications);
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao carregar candidatos');
      },
    });
  }
}
