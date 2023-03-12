import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ReservasComponent } from './reservas/reservas.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/reservas', pathMatch: 'full' },
  { path: 'admin', component: AdminPanelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
