import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpaceXContainerComponent } from './components/space-x-container/space-x-container.component';
import { SpaceXLaunchCardComponent } from './components/space-x-launch-card/space-x-launch-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    HeaderComponent,
    FooterComponent,
    SpaceXContainerComponent,
    SpaceXLaunchCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
