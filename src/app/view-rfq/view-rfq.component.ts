import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-rfq',
  templateUrl: './view-rfq.component.html',
  styleUrls: ['./view-rfq.component.css']
})
export class ViewRfqComponent implements OnInit {
  
  
  rfqNumber: string = 'RFQ-20240926-001';
  dateRequested: string = '26-Sep-2024';
  supplierName: string = 'Global Tech Suppliers';
  deadlineForSubmission: string = '05-Oct-2024';
  quoteStatus: string = 'Open for Quotes';

  
  itemsRequested: Array<{ code: string; name: string; quantity: number; unit: string; deliveryDate: string }> = [
    { code: 'ITM101', name: 'Fiber Optic Cable', quantity: 200, unit: 'Meter', deliveryDate: '20-Oct-2024' },
    { code: 'ITM102', name: 'Network Switch', quantity: 50, unit: 'Piece', deliveryDate: '22-Oct-2024' },
    { code: 'ITM103', name: 'Wireless Router', quantity: 30, unit: 'Piece', deliveryDate: '25-Oct-2024' },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  
  submitQuote(): void {
    console.log('Quote submitted');
    
  }

  
  declineRfq(): void {
    console.log('RFQ declined');
  }
}
