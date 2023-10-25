import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebBuilderComponent } from './web-builder/web-builder.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'builder', component: WebBuilderComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
