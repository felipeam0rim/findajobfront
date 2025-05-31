import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-register-modal',
  imports: [FormsModule],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss',
})
export class RegisterModalComponent {
  @Input() onOpenRegister!: () => void;
  @Output() back = new EventEmitter<void>();
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  goBack() {
    this.back.emit();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    // Aqui você pode adicionar a lógica de cadastro
    console.log('Cadastro com', this.name, this.email, this.password);
    // Após cadastro, pode fechar o modal
  }
}
