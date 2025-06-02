import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterModalComponent } from './components/register/register-modal/register-modal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { JoblistComponent } from './components/job/joblist/joblist.component';
import { JobdetailsComponent } from './components/job/jobdetails/jobdetails.component';
import { RegisterJobComponent } from './components/job/register-job/register-job.component';
import { PerfilAcademicComponent } from './components/perfil-academic/perfil-academic.component';
import { ApplicationsListComponent } from './components/applications-list/applications-list.component';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';

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
        path: 'perfil-academic',
        component: PerfilAcademicComponent,
      },
      {
        path: 'joblist',
        component: JoblistComponent,
      },
      {
        path: 'applications-list',
        component: ApplicationsListComponent,
      },

      {
        path: 'jobdetails/:id',
        component: JobdetailsComponent,
      },
      {
        path: 'job/:id/candidates',
        component: CandidatesListComponent,
      },
      {
        path: 'register-job',
        component: RegisterJobComponent,
      },
    ],
  },
];
