import { Routes } from '@angular/router';
import { TabellaComponent } from './tabella/tabella.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
  { path: 'form', component: ReactiveFormComponent, title: 'Form' },
  { path: 'tabella', component: TabellaComponent, title: 'Tabella' },
];
