import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';


const routes: Routes = [
  { path: 'pesquisa', component: DadosClienteComponent, data: { title: 'dados' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
