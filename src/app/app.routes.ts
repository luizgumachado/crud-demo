import { Routes } from '@angular/router';
import { Search } from './search/search';
import { Register } from './register/register';

export const routes: Routes = [
    { path: 'register', component: Register },
    { path: 'search', component: Search }
];
