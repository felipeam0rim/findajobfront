import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JobService } from '../../../services/job.service';
import { Job } from '../../../models/job';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobdetails',
  imports: [CommonModule, RouterModule],
  templateUrl: './jobdetails.component.html',
  styleUrl: './jobdetails.component.scss',
})
export class JobdetailsComponent {
  @Input('job') job: Job = new Job();
  jobService = inject(JobService);
  router = inject(Router);

  constructor(private activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.params['id'];
    if (id > 0) {
      this.getJobById(id);
      console.log('Job: ', this.job);
    }
  }

  getJobById(id: number) {
    this.jobService.getJobById(id).subscribe({
      next: (value) => {
        this.job = value;
        console.log(value);
      },
      error: (erro) => {
        alert('Erro na requisição da lista');
      },
    });
  }

  deleteJob(job: Job) {
    this.jobService.deleteJob(job.id).subscribe({
      next: (value) => {
        alert('Deletado com sucesso!');
        this.router.navigate(['dashboard/joblist']);
      },
      error: (erro) => {
        alert('Erro ao deletar vaga');
      },
    });
  }

  goBack() {
    this.router.navigate(['dashboard/joblist']);
  }
}
