import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  router = inject(Router);
  tradeName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const enterprise = localStorage.getItem('enterprise');
    if (enterprise) {
      this.tradeName = JSON.parse(enterprise).tradeName;
    }
  }

  logout() {
    localStorage.removeItem('enterprise');
  }
}
