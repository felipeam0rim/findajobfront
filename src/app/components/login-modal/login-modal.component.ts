import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  onSubmit(event: Event): void {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    if (this.email == 'admin' && this.password == 'admin') {
      this.router.navigate(['/dashboard/perfil'], {
        queryParams: { email: this.email },
      });
    } else {
      alert('credenciais inválidas');
    }
    console.log('Login tentado com:', this.email, this.password);
    // Após processo de login, fechar modal
  }
}
