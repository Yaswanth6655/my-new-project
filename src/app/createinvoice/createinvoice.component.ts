import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createinvoice',
  templateUrl: './createinvoice.component.html',
  styleUrls: ['./createinvoice.component.css']
})
export class CreateInvoiceComponent {
  poLines = [
    { name: 'Door', uom: 'Each', quantity: 5, unitPrice: 500, installationFee: 10, freightCharge: 20, tax: 10, lineTotal: 2780 },
    { name: 'Switch Board', uom: 'Each', quantity: 3, unitPrice: 567, installationFee: 10, freightCharge: 10, tax: 10, lineTotal: 1891.1 }
  ];

  constructor(private router: Router) {}

  calculateGrandTotal(): number {
    return this.poLines.reduce((total, item) => total + item.lineTotal, 0);
  }

  submit() {
    const invoiceData = {
      invoiceNumber: `INV${Math.floor(Math.random() * 1000000)}`,
      invoiceDate: new Date().toLocaleDateString(),
      vendor: 'Your Vendor Name', 
      status: 'Open',
      totalAmount: this.calculateGrandTotal(),
      items: this.poLines.map(line => ({
        description: line.name,
        quantity: line.quantity,
        unitPrice: line.unitPrice,
        total: line.lineTotal
      }))
    };

    // Save the created invoice data to localStorage
    localStorage.setItem('invoice', JSON.stringify(invoiceData));

    alert('Invoice submitted successfully!');
    
    // Navigate to the invoice view component
    this.router.navigate(['/invoice']);
  }

  cancel() {
    console.log('Form canceled');
  }
}
