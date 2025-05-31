import { Component } from '@angular/core';
import { Job } from '../../../models/job';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joblist',
  imports: [CommonModule],
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.scss',
})
export class JoblistComponent {
  lista: Job[] = [];

  constructor() {
    let job: Job = new Job();
    job.id = 1;
    job.titulo = 'Estágio em Desenvolvimento';
    job.empresa = 'Senai';

    let job1: Job = new Job();
    job1.id = 2;
    job1.titulo = 'Estágio em Suporte';
    job1.empresa = 'Sesi';

    let job2: Job = new Job();
    job2.id = 3;
    job2.titulo = 'Estágio em Redes';
    job2.empresa = 'FMAC';

    this.lista.push(job, job1, job2);
  }
}
