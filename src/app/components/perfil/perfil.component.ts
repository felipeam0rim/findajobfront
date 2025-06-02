import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, ValueChangeEvent } from '@angular/forms';
import { EnterpriseService } from '../../services/enterprise.service';
import { Enterprise } from '../../models/enterprise';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent {
  router = inject(Router);
  enterpriseService = inject(EnterpriseService);
  enterprise: Enterprise = JSON.parse(localStorage.getItem('enterprise')!);
  ngOnInit() {
    this.enterpriseService.getEnterpriseById(this.enterprise.id).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        alert('Erro ao carregar dados da empresa!');
      },
    });
  }
}
