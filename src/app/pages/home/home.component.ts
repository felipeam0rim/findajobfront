import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModalComponent } from '../../components/login-modal/login-modal.component';
import { CommonModule } from '@angular/common';
import { RegisterModalComponent } from '../../components/register-modal/register-modal.component';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    LoginModalComponent,
    RegisterModalComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isLoginOpen = true;
  isRegisterOpen = false;
  isRegisterModalOpen = false;

  openLogin(): void {
    this.isLoginOpen = true;
    this.isRegisterOpen = false;
    this.isRegisterModalOpen = false;
    console.log('login mudou!', this.isLoginOpen);
  }
  openRegister(): void {
    this.isRegisterOpen = true;
    this.isLoginOpen = false;
    this.isRegisterModalOpen = false;
    console.log('registro duplo!', this.isRegisterOpen);
    console.log('registro form', this.isRegisterModalOpen);
  }
  openRegisterModal(event: Event) {
    this.isRegisterModalOpen = true;
    this.isRegisterOpen = false;
    event.preventDefault();
    console.log('registro duplo!', this.isRegisterOpen);
    console.log('registro form', this.isRegisterModalOpen);
  }
}
