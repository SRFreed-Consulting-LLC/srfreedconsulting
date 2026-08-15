import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AccordionComponent, AccordionItemComponent, ModalComponent, TabsComponent } from './shared/components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'certifications',
    component: CertificationsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AccordionComponent,
    AccordionItemComponent,
    ModalComponent,
    TabsComponent
  ],
  exports: [RouterModule],
  declarations: [
    CertificationsComponent,
    ExperienceComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent
  ]
})
export class AppRoutingModule { }
