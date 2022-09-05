import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { VideosComponent } from './videos/videos.component';
import { PeopleComponent } from './people/people.component';
import { DocumentsComponent } from './documents/documents.component';
import { EventsComponent } from './events/events.component';
import { CommunitiesComponent } from './communities/communities.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ChannelsComponent } from './channels/channels.component';
import { ActivityComponent } from './activity/activity.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';

import { UserService } from './services/user.service';
import { ChannelService } from './services/channel.service';

import { Activity2Service } from './services/activity2.service';

import { Activity2Component } from './activity2/activity2.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SocmedComponent } from './socmed/socmed.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    PeopleComponent,
    DocumentsComponent,
    EventsComponent,
    CommunitiesComponent,
    FavoritesComponent,
    ChannelsComponent,
    ActivityComponent,
    NavbarComponent,
    TestComponent,
    Activity2Component,
    SocmedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [UserService, Activity2Service, ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
