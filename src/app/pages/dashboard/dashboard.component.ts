import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  router = inject(Router);
  authService = inject(AuthService);
  name: string = '';
  tipo: string | null = null;
  isUser: boolean = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.authService.getNome();
    this.tipo = this.authService.getTipo();
    if (this.tipo == 'academico') {
      this.isUser = true;
    }
  }
  logout() {
    this.authService.logout();
  }
}
