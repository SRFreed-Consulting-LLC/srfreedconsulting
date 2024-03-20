import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule, HeaderComponent, FooterComponent } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopNavToolbarComponent } from './layouts/top-nav-toolbar/top-nav-toolbar.component';
import { DxMenuModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    TopNavToolbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    FontAwesomeModule,
    DxMenuModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    HeaderComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
