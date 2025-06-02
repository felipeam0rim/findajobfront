import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModalComponent } from '../../components/login-modal/login-modal.component';
import { CommonModule } from '@angular/common';
import { RegisterModalComponent } from '../../components/register/register-modal/register-modal.component';
import { RegisterUserModalComponent } from '../../components/register/register-user-modal/register-user-modal.component';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    LoginModalComponent,
    RegisterModalComponent,
    RegisterUserModalComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isLoginOpen = true;
  isRegisterOpen = false;
  isRegisterEnterpriseModalOpen = false;
  isRegisterUserModalOpen = false;

  openLogin(): void {
    this.isLoginOpen = true;
    this.isRegisterOpen = false;
    this.isRegisterEnterpriseModalOpen = false;
    this.isRegisterUserModalOpen = false;
    console.log('login mudou!', this.isLoginOpen);
  }
  openRegister(): void {
    this.isRegisterOpen = true;
    this.isLoginOpen = false;
    this.isRegisterEnterpriseModalOpen = false;
    this.isRegisterUserModalOpen = false;
    console.log('registro duplo!', this.isRegisterOpen);
    console.log('registro form', this.isRegisterEnterpriseModalOpen);
  }
  openRegisterEnterpriseModal(event: Event) {
    this.isRegisterEnterpriseModalOpen = true;
    this.isRegisterOpen = false;
    event.preventDefault();
    console.log('registro duplo!', this.isRegisterOpen);
    console.log('registro form', this.isRegisterEnterpriseModalOpen);
  }
  openRegisterUserModal(event: Event) {
    this.isRegisterUserModalOpen = true;
    this.isRegisterOpen = false;
    event.preventDefault();
    console.log('registro duplo!', this.isRegisterOpen);
    console.log('registro form', this.isRegisterUserModalOpen);
  }
}
