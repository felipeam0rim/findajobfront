import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JobService } from '../../../services/job.service';
import { Job } from '../../../models/job';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ApplicationService } from '../../../services/application.service';

@Component({
  selector: 'app-jobdetails',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './jobdetails.component.html',
  styleUrl: './jobdetails.component.scss',
})
export class JobdetailsComponent {
  @Input('job') job: Job = new Job();
  jobService = inject(JobService);
  router = inject(Router);
  isEditOpen: Boolean = false;
  authService = inject(AuthService);
  applicationService = inject(ApplicationService);

  tipo: string | null = null;
  isUser: boolean = false;

  ngOnInit() {
    this.tipo = this.authService.getTipo();
    if (this.tipo == 'academico') {
      this.isUser = true;
    }
  }

  constructor(private activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.params['id'];
    if (id > 0) {
      this.getJobById(id);
    }
  }

  applyToJob(id: number) {
    const userId = this.authService.getUserId();
    const jobId = this.job.id;
    if (!userId) {
      alert('Usuário não autenticado!');
      this.router.navigate(['/home']);
      return;
    }
    this.applicationService.applyToJob(userId, jobId).subscribe({
      next: () => {
        alert('Candidatura envidada com sucesso!');
        this.router.navigate(['/dashboard/joblist']);
      },
      error: (err) => {
        alert('Erro ao enviar candidatura');
      },
    });
  }

  goBack() {
    this.router.navigate(['dashboard/joblist']);
  }

  backToJob() {
    this.isEditOpen = false;
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

  editJob(jobId: number, job: Job) {
    this.jobService.updateJob(jobId, job).subscribe({
      next: (value) => {
        alert('Vaga atualizada com sucesso!');
        this.isEditOpen = false;
      },
      error: (err) => {
        alert('Erro ao atualizar vaga!');
        this.isEditOpen = false;
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

  openEdit() {
    this.isEditOpen = true;
  }
}
