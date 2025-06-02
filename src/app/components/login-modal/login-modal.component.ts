import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EnterpriseService } from '../../services/enterprise.service';

@Component({
  selector: 'app-login-modal',
  imports: [FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss',
})
export class LoginModalComponent {
  router = inject(Router);
  email: string = '';
  password: string = '';
  enterpriseService = inject(EnterpriseService);

  login(event: Event): void {
    this.enterpriseService.login(this.email, this.password).subscribe({
      next: (enterprise) => {
        localStorage.setItem('enterprise', JSON.stringify(enterprise));
        this.router.navigate(['/dashboard/perfil']);
      },
      error: (err) => {
        alert('Crendenciais Inválidas!');
      },
    });
    event.preventDefault();
  }
}
