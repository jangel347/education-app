import { Routes } from '@angular/router';
import { MediaMapsComponent } from './media-maps/media-maps.component';
import { MediaQuestionsComponent } from './media-questions/media-questions.component';

export const routes: Routes = [
    {
        'path': 'maps', component: MediaMapsComponent
    },
    {
        'path': 'questions', component: MediaQuestionsComponent
    }
];
