import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteComponent } from './note/note.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full',
        title: 'Dashboard'
    },
    {
        path: 'project-details',
        component: ProjectDetailsComponent,
        title: 'Project Details'
    },
    {
        path: 'note',
        component: NoteComponent,
        title: 'Note'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
