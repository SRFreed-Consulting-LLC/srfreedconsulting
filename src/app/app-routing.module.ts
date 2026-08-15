import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpactSystemComponent } from './pages/impact-system/impact-system.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorkComponent } from './pages/work/work.component';
import { AccordionComponent, AccordionItemComponent, ModalComponent, TabsComponent } from './shared/components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    // The Impact estate is one system with four applications, so the overview
    // owns the parent slug and each application hangs beneath it.
    path: 'work/impact-platform',
    component: ImpactSystemComponent
  },
  {
    path: 'impact',
    component: ImpactSystemComponent
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
    TabsComponent,
    WorkComponent,
    ImpactSystemComponent
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
