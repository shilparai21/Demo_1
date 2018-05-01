import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CapitalizePipe } from './user/capitalize.pipe';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { FilterPipe } from './filter.pipe';


const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'contact',      component: ContactComponent },
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'user List' }
  },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '**', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CapitalizePipe,
    ContactComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
