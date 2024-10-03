import { Routes } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PolicyComponent } from './policy/policy.component';

export const routes: Routes = [
    { path: '', component: MaincontentComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'policy', component: PolicyComponent },
];
