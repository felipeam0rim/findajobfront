import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, ValueChangeEvent } from '@angular/forms';
import { EnterpriseService } from '../../services/enterprise.service';
import { Enterprise } from '../../models/enterprise';
import { Router } from '@angular/router';
import { Academic } from '../../models/academic';
import { User } from '../../models/user';
import { AcademicService } from '../../services/academic.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent {
  router = inject(Router);
  enterpriseService = inject(EnterpriseService);
  academicService = inject(AcademicService);
  authService = inject(AuthService);
  enterprise!: Enterprise;

  tipoUsuario: string = '';
  userId: number | null = null;

  ngOnInit() {
    const tipo = this.authService.getTipo();
    const id = this.authService.getUserId();

    if (!tipo || !id) {
      alert('Usuário não autenticado!');
      this.router.navigate(['/login']);
      return;
    }

    this.tipoUsuario = tipo;
    this.userId = id;

    if (tipo === 'empresa') {
      this.enterpriseService.getEnterpriseById(id).subscribe({
        next: (value) => {
          this.enterprise = value;
          console.log('Dados da empresa:', value);
        },
        error: () => {
          alert('Erro ao carregar dados da empresa!');
        },
      });
    }
  }
}
