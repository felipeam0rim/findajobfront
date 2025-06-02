import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AcademicService } from '../../../services/academic.service';
import { Academic } from '../../../models/academic';
import { User } from '../../../models/user';

@Component({
  selector: 'app-register-user-modal',
  imports: [FormsModule],
  templateUrl: './register-user-modal.component.html',
  styleUrl: './register-user-modal.component.scss',
})
export class RegisterUserModalComponent {
  @Output() back = new EventEmitter<void>();
  router = inject(Router);
  academicService = inject(AcademicService);
  academic: Academic = new Academic();

  goBack() {
    this.back.emit();
  }

  createAcademic(academic: Academic) {
    this.academicService.createAcademic(academic).subscribe({
      next: (message) => {
        alert('Usuário Cadastrado com sucesso!');
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        alert('Erro ao cadastrar empresa');
      },
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.createAcademic(this.academic);
    console.log(console.log('Dados do usuário:', this.academic));
  }
}
