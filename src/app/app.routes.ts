import { Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from '../app/primeira-pagina/primeira-pagina.component'; // Adjust the path as needed

export const routes: Routes = [
    { path: 'primeira-pagina', component: PrimeiraPaginaComponent },
    { path: '', redirectTo: '/primeira-pagina', pathMatch: 'full' } // Default route
];
