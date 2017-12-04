import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'works', component: WorksComponent },
  { path: 'aboutme', component: AboutComponent }
];

@NgModule({
  // imports: [CommonModule], //
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
