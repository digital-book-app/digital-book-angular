import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteComponent } from './note/note.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
    },
    {
        path: 'project-details',
        component: ProjectDetailsComponent
    },
    {
        path: 'note',
        component: NoteComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
