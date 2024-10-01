import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ActiveElement, ChartTypeRegistry } from 'chart.js';
@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class mainviewComponent implements OnInit, AfterViewInit {
  rfqList: Array<any> = [];
  poList: Array<any> = [];
  invoiceList: Array<any> = [];

  @ViewChild('doughnutChart') doughnutChart: any;
  chart!: Chart<'doughnut', number[], unknown>;

  ngOnInit() {
    
    this.rfqList = [
      { number: 'RFQ001', name: 'Proposal A', endDate: '2024-10-10', status: 'Open' },
      { number: 'RFQ002', name: 'Proposal B', endDate: '2024-11-15', status: 'Closed' },
      
    ];

    this.poList = [
      { number: 'PO001', vendor: 'Vendor A', requiredDate: '2024-10-20', status: 'Pending' },
     
    ];

    this.invoiceList = [
      { number: 'INV001', vendor: 'Vendor B', dueDate: '2024-09-30', status: 'Due' },
      
    ];
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = this.doughnutChart.nativeElement.getContext('2d');

    this.chart = new Chart<'doughnut', number[], unknown>(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
          },
        ],
      } as ChartConfiguration<'doughnut'>['data'],
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              },
            },
          },
        },
      } as ChartConfiguration<'doughnut'>['options'],
    });
  }

  onChartClick(event: MouseEvent) {
    
    if (this.chart) {
      const activeElements: ActiveElement[] = this.chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
  
      if (activeElements.length) {
        const index = activeElements[0].index;
  
        
        const label = this.chart.data?.labels?.[index];
        const value = this.chart.data?.datasets?.[0]?.data?.[index];
  
        if (label !== undefined && value !== undefined) {
          console.log(`Chart clicked! Label: ${label}, Value: ${value}`);
        } else {
          console.warn('Label or value is undefined.');
        }
      }
    } else {
      console.warn('Chart is not defined.');
    }
  }
  
  
}
