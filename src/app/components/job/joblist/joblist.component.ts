import { Component, inject } from '@angular/core';
import { Job } from '../../../models/job';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-joblist',
  imports: [CommonModule, RouterModule],
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.scss',
})
export class JoblistComponent {
  lista: Job[] = [];
  jobService = inject(JobService);
  router = inject(Router);

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

  ngOnInit() {
    const responseRaw = localStorage.getItem('response');

    if (!responseRaw) {
      console.warn('Usuário não autenticado!');
      this.router.navigate(['/login']);
      return;
    }

    const response = JSON.parse(responseRaw);

    if (response.tipo === 'empresa') {
      this.jobService
        .getByEnterpriseId(response.dados.id)
        .subscribe((jobs: Job[]) => {
          this.lista = jobs;
        });
    } else if (response.tipo === 'academico') {
      this.getAllJobs();
    }
  }
}
