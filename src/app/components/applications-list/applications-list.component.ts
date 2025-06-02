import { Component, inject } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Router, RouterModule } from '@angular/router';
import { ApplicationService } from '../../services/application.service';
import { AuthService } from '../../services/auth.service';
import { Application } from '../../models/application';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applications-list',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './applications-list.component.html',
  styleUrl: './applications-list.component.scss',
})
export class ApplicationsListComponent {
  lista: Application[] = [];
  authService = inject(AuthService);
  applicationService = inject(ApplicationService);
  router = inject(Router);

  ngOnInit() {
    const userId = this.authService.getUserId();

    if (!userId) {
      alert('Usuário não autenticado!');
      this.router.navigate(['/login']);
      return;
    }
    this.applicationService.getApplicationByUser(userId).subscribe({
      next: (applications: Application[]) => {
        this.lista = applications;
        console.log('aqui: ', applications);
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao carregar vagas aplicadas');
      },
    });
  }
}
