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
      next: (response: any) => {
        const tipoUsuario = response.tipo;

        if (tipoUsuario === 'empresa') {
          this.router.navigate(['/dashboard/perfil']);
          localStorage.setItem('response', JSON.stringify(response));
        } else if (tipoUsuario === 'academico') {
          this.router.navigate(['dashboard/perfil-academic']);
          localStorage.setItem('response', JSON.stringify(response));
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        alert('Crendenciais Inválidas!');
      },
    });
  }
}
