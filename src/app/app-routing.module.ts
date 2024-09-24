import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { loginGuard } from './guards/login.guard';
import { sesionGuard } from './guards/sesion.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'auth/login', pathMatch: 'full'}, 
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule), canActivate: [sesionGuard] },
            {
                path: 'vmtdev', component: AppLayoutComponent,
                children: [
                    { path: 'inventarios', loadChildren: () => import('./modulos/inventarios/inventario.module').then( m => m.InventarioModule ) },
                    { path: 'operaciones', loadChildren: () => import('./modulos/operaciones/operaciones.module').then( m => m.OperacionesModule ) },
                    { path: 'home', loadComponent: () => import('./demo/components/dashboard/dashboard.component').then(c => c.DashboardComponent ) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ], canActivate: [loginGuard]
            },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
