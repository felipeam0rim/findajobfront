import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Enterprise } from '../../../models/enterprise';
import { EnterpriseService } from '../../../services/enterprise.service';

@Component({
  selector: 'app-register-modal',
  imports: [FormsModule],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss',
})
export class RegisterModalComponent {
  @Input() onOpenRegister!: () => void;
  @Output() back = new EventEmitter<void>();
  router = inject(Router);
  enterpriseService = inject(EnterpriseService);
  enterprise: Enterprise = new Enterprise();

  goBack() {
    this.back.emit();
  }

  createEnterprise(enterprise: Enterprise) {
    this.enterpriseService.createEnterprise(enterprise).subscribe({
      next: (message) => {
        alert('Empresa Cadastrada com sucesso!');
        this.router.navigate(['home']);
      },
      error: (erro) => {
        alert('Erro ao cadastrar empresa');
      },
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.createEnterprise(this.enterprise);
    console.log(console.log('Dados da empresa:', this.enterprise));
  }
}
