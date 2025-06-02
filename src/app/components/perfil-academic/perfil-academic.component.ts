import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicService } from '../../services/academic.service';
import { AuthService } from '../../services/auth.service';
import { Academic } from '../../models/academic';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil-academic',
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil-academic.component.html',
  styleUrl: './perfil-academic.component.scss',
})
export class PerfilAcademicComponent {
  router = inject(Router);
  academicService = inject(AcademicService);
  authService = inject(AuthService);
  academic!: Academic;

  tipoUsuario: string = '';
  userId: number | null = null;

  ngOnInit() {
    const tipo = this.authService.getTipo();
    const id = this.authService.getUserId();

    if (!tipo || !id) {
      alert('Usuário não autenticado!');
      this.router.navigate(['/home']);
      return;
    }

    this.tipoUsuario = tipo;
    this.userId = id;

    if (tipo === 'academico') {
      this.academicService.getAcademicById(id).subscribe({
        next: (value) => {
          this.academic = value;
          console.log('Dados do acadêmico:', value);
        },
        error: () => {
          alert('Erro ao carregar dados do acadêmico!');
        },
      });
    }
  }
}
