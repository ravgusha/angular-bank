import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: '/navigator', pathMatch: 'full' },
  {
    path: 'navigator',
    component: TableComponent,
    children: [
      {
        path: 'navigator?tab=:number',
        component: TableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
