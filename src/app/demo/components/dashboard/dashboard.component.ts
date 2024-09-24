import { map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { StockService } from 'src/app/services/stock.service';
import { RequestModel } from 'src/app/models/request.model';
import { DataQueryModel } from 'src/app/models/dataQuery.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';

@Component({
    templateUrl: './dashboard.component.html',
    standalone:true,
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
    ]
})
export class DashboardComponent implements OnInit, OnDestroy {
    private router=inject(Router)
    private _dashboardService=inject(DashboardService);
    private _stockService=inject(StockService);

    items!: MenuItem[];

    products!: Product[];

    mes:any[]=[];
    ventas=[];
    chartData: any;
    ventasMensuales:any;
    chartOptions: any;
    dashboard:any={
        diferenciaStock: 0,
        totalDia: 0,
        totalMovimientos: 0
    }
    subscription!: Subscription;

    constructor(private productService: ProductService, public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$
        .pipe(debounceTime(25))
        .subscribe((config) => {
        });
    }

    ngOnInit() {
        let dataQuery:DataQueryModel={
            OpcionData:'rango_cantidad',
            DataFirstQuery:'1',
            DataSecondQuery:'7'
        }
        let request:RequestModel={
            Usuario:'',
            Operacion:'GET',
            Modulo:1,
            Ip:'00',
            Data:dataQuery
        }
        this._stockService.getStock(request).subscribe({
            next:resp=>this.products=resp['data']
        });
        this._dashboardService.getDashboard(request).subscribe({
            next:resp=>{ 
                this.dashboard=resp['data']
            }
        })

        this._dashboardService.getVentasMensuales(request).subscribe({
            next:resp=> {
                this.ventasMensuales=resp['data']
                this.mes=this.ventasMensuales.mes
                this.ventas=this.ventasMensuales.ventas
                this.cargarDatos();
                this.initChart();

            }
        })

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }

    initChart() {

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.chartData = {        
            labels: this.mes,
            datasets: [

                {
                    label: 'Ventas Mensuales',
                    data: this.ventas,
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    irStock(){
        
        this.router.navigateByUrl('/vmtdev/operaciones/stock')
    }
     cargarDatos(){
        let mesVariable=[]
        let ventasVariable=[]
        this.ventasMensuales.forEach(element => {
            mesVariable.push(element.mes);
            ventasVariable.push(element.ventas)
        });        
        this.mes=mesVariable
        this.ventas=ventasVariable
    }
}
