import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';


const routes: Routes = [
  { path: '', redirectTo: '/primeira-pagina', pathMatch: 'full' },
  { path: 'primeira-pagina', component: PrimeiraPaginaComponent }
]


@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
