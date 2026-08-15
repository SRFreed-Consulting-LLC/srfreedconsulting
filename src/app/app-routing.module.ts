import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgenticComponent } from './pages/agentic/agentic.component';
import { BackgroundComponent } from './pages/background/background.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpactSystemComponent } from './pages/impact-system/impact-system.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'impact', component: ImpactSystemComponent },
  { path: 'agentic', component: AgenticComponent },
  { path: 'background', component: BackgroundComponent },
  { path: 'contact', component: BackgroundComponent, data: { anchor: 'contact' } },

  // Case studies render from one component; content lives in data.
  { path: 'work/:slug', component: CaseStudyComponent },

  // The old Experience, Skills, Certifications and Projects pages were folded
  // into Work and Background. Redirect rather than 404 any existing links.
  { path: 'experience', redirectTo: 'background', pathMatch: 'full' },
  { path: 'certifications', redirectTo: 'background', pathMatch: 'full' },
  { path: 'skills', redirectTo: 'work', pathMatch: 'full' },
  { path: 'projects', redirectTo: 'work', pathMatch: 'full' },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HomeComponent,
    WorkComponent,
    ImpactSystemComponent,
    CaseStudyComponent,
    AgenticComponent,
    BackgroundComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
