import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { JoblistComponent } from './components/job/joblist/joblist.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterModalComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'joblist',
        component: JoblistComponent,
      },
      // {
      //   path: 'jobs/new',
      //   component: JobdetailsComponent,
      // },
      // {
      //   path: 'jobs/edit/:id',
      //   component: JobdetailsComponent,
      // },
    ],
  },
];
