import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppNotfoundComponent} from './utilities/pages/notfound/app.notfound.component';
import {AppErrorComponent} from './utilities/pages/error/app.error.component';
import {AppAccessdeniedComponent} from './utilities/pages/accesdenied/app.accessdenied.component';
import { HomeComponent } from './landing-pages/home/home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
