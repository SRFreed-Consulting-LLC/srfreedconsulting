import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent, HeaderModule } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { DxAccordionModule, DxButtonModule, DxDataGridModule, DxFormModule, DxGalleryModule, DxPopupModule, DxScrollViewModule, DxTabsModule } from 'devextreme-angular';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'certifications',
    component: CertificationsComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'skills',
    component: SkillsComponent,
    canActivate: [ AuthGuardService ]
  },          
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    CommonModule, 
    HeaderModule,
    RouterModule.forRoot(routes, { useHash: true }),
    DxTabsModule, DxDataGridModule, DxFormModule, DxAccordionModule, DxPopupModule, DxButtonModule, DxGalleryModule, DxScrollViewModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    CertificationsComponent,
    ExperienceComponent,
    HomeComponent,
    ResumeComponent,
    SkillsComponent,
    ProjectsComponent
  ]
})
export class AppRoutingModule { }
