import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, ActiveElement } from 'chart.js';

@Component({
  selector: 'app-middlebar',
  templateUrl: './middlebar.component.html',
  styleUrls: ['./middlebar.component.css'],
})
export class MiddlebarComponent implements OnInit, AfterViewInit {
  @ViewChild('doughnutChart', { static: false }) doughnutChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('lineChart', { static: false }) lineChart!: ElementRef<HTMLCanvasElement>;

  doughnutChartInstance!: Chart<'doughnut', number[], unknown>;
  lineChartInstance!: Chart<'line', number[], unknown>;

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.createDoughnutChart();
    this.createLineChart();
  }

  
  createDoughnutChart() {
    const ctx = this.doughnutChart.nativeElement.getContext('2d');
    if (ctx) {
      this.doughnutChartInstance = new Chart<'doughnut', number[], unknown>(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Approved', 'Pending', 'Rejected'],
          datasets: [
            {
              label: 'Purchase Orders',
              data: [30, 10, 5], 
              backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
              borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)', 'rgba(255, 99, 132, 1)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        },
      });
    }
  }

  
  createLineChart() {
    const ctx = this.lineChart.nativeElement.getContext('2d');
    if (ctx) {
      this.lineChartInstance = new Chart<'line', number[], unknown>(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Monthly Orders',
              data: this.generateRandomOrders(), 
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        },
      });
    }
  }

 
  private generateRandomOrders(): number[] {
    const orders: number[] = [];
    for (let i = 0; i < 12; i++) {
      
      orders.push(Math.floor(Math.random() * 100) + 1);
    }
    return orders;
  }

  
  onChartClick(event: MouseEvent) {
    if (this.doughnutChartInstance) {
      const activeElements: ActiveElement[] = this.doughnutChartInstance.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
      if (activeElements.length) {
        const index = activeElements[0].index;
        const label = this.doughnutChartInstance.data?.labels?.[index];
        const value = this.doughnutChartInstance.data?.datasets?.[0]?.data?.[index];
        if (label !== undefined && value !== undefined) {
          console.log(`Doughnut Chart clicked! Label: ${label}, Value: ${value}`);
        } else {
          console.warn('Label or value is undefined.');
        }
      }
    } else {
      console.warn('Doughnut chart is not defined.');
    }
  }
}
