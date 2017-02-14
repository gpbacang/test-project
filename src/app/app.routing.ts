import { Routes, RouterModule } from '@angular/router';

import { TitleComponent } from './title/title.component';
import { WaitPageComponent } from './wait-page/wait-page.component';

const APP_ROUTES: Routes = [
  { path: 'wait', component: WaitPageComponent },
  { path: '', component: TitleComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
