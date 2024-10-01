import { Component, OnInit } from '@angular/core';

// Define the structure of a Purchase Order
interface PurchaseOrder {
  poNumber: string;
  vendorName: string;
  poRequiredDate: string;
  status: 'Open' | 'Acknowledged'; // Either "Open" or "Acknowledged"
}

@Component({
  selector: 'app-customer-po',
  templateUrl: './customer-po.component.html',
  styleUrls: ['./customer-po.component.css'],
})
export class CustomerPoComponent implements OnInit {
  purchaseOrders: PurchaseOrder[] = [];

  constructor() {}

  ngOnInit(): void {
    // Static data acting as a mock database
    this.purchaseOrders = [
      { poNumber: 'PO160622016', vendorName: 'MK Industries', poRequiredDate: '24-Jun-2022', status: 'Acknowledged' },
      { poNumber: 'PO160622014', vendorName: 'MK Industries', poRequiredDate: '16-Nov-2022', status: 'Acknowledged' },
      { poNumber: 'PO160622008', vendorName: 'MK Industries', poRequiredDate: '16-Nov-2022', status: 'Open' },
      { poNumber: 'PO160622010', vendorName: 'SPRS Solutions', poRequiredDate: '16-Nov-2022', status: 'Acknowledged' },
      { poNumber: 'PO160622009', vendorName: 'SPRS Solutions', poRequiredDate: '16-Nov-2022', status: 'Acknowledged' },
    ];
  }
}
