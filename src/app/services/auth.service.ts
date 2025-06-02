import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthResponse {
  tipo: 'empresa' | 'academico';
  dados: {
    id: number;
    tradeName?: string;
    name?: string;
    email?: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private localStorageKey = 'response';

  constructor(private router: Router) {}

  // Pega e retorna os dados parseados do localStorage
  getUser(): AuthResponse | null {
    const raw = localStorage.getItem(this.localStorageKey);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as AuthResponse;
    } catch {
      return null;
    }
  }

  // Retorna o tipo (empresa ou academico)
  getTipo(): 'empresa' | 'academico' | null {
    const user = this.getUser();
    return user?.tipo ?? null;
  }

  // Retorna o ID do usuário
  getUserId(): number | null {
    const user = this.getUser();
    return user?.dados?.id ?? null;
  }

  // Retorna o nome ou tradeName
  getNome(): string {
    const user = this.getUser();
    return user?.dados?.tradeName || user?.dados?.name || '';
  }

  // Faz logout
  logout(): void {
    localStorage.removeItem(this.localStorageKey);
    this.router.navigate(['/home']);
  }
}
