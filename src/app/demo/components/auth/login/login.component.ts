import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AfterloginService } from 'src/app/services/afterlogin.service';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    usuario!: string;

    password!: string;

    constructor(public layoutService: LayoutService, 
        private router: Router,
        private authService: AuthserviceService,
        private afterLoginService: AfterloginService,
        private changeDetector: ChangeDetectorRef) { }

    login() {
        let dataLogin: any = { opcionQuery: '', dataFirstQuery: this.usuario, dataSecondQuery: this.password };
 
        let loginRequest: any = {
            data: JSON.stringify(dataLogin)
        }
        this.afterLoginService.dataAfterLogin('');

       /* this.authService.login(loginRequest).subscribe({
            next: (resp) => {
                if(resp.codigo === '000'){
                    this.afterLoginService.dataAfterLogin(resp);
                    this.changeDetector.detectChanges();*/
                    this.router.navigate(['/vmtdev/home']);
              /* } else {
                alert(JSON.stringify(resp));
               }
            },
            error: (error) => {
                console.log(error['message']);
            }
        });

        /*this.authService.login(loginRequest).subscribe(
            resp => {
                
                console.log();
            },
            error => {
                console.log(error['message']);
            
        });*/
    }
}
