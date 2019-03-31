import { Routes } from '@angular/router';
import { PATH_HOME, PATH_USER } from './app.routes.constantes';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ErrorComponent } from './error/error.component';

export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomePageComponent,
    children: [
        { path: `:error`, component: ErrorComponent }
    ]},
    { path: `${PATH_USER}/:user`, component: UserPageComponent }
];
