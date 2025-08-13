import { Routes } from '@angular/router';
import { MutationsStats } from './components/mutations-stats/mutations-stats';
import { Mutations } from './components/mutations/mutations';
import { MutationsList } from './components/mutations-list/mutations-list';

export const routes: Routes = [
  { path: '', component: MutationsStats },
  { path: 'dna', component: Mutations },
  { path: 'registers', component: MutationsList },
  { path: '**', redirectTo: '' },
];
