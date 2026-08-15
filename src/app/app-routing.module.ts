import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CaseStudyComponent } from './pages/case-study/case-study.component';
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
    path: 'impact',
    component: ImpactSystemComponent
  },
  {
    // Every case study renders from one component; content lives in data.
    path: 'work/:slug',
    component: CaseStudyComponent
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
    ImpactSystemComponent,
    CaseStudyComponent
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
