import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceNumber: string = '';
  invoiceDate: string = '';
  vendor: string = '';
  status: string = '';
  totalAmount: number = 0;
  items: InvoiceItem[] = [];

  ngOnInit() {
    this.loadInvoiceData(); // Load stored invoice data when the component initializes
  }

  // Method to load invoice data from localStorage
  loadInvoiceData(): void {
    const storedInvoice = localStorage.getItem('invoice');
    if (storedInvoice) {
      const invoiceData = JSON.parse(storedInvoice);
      this.invoiceNumber = invoiceData.invoiceNumber;
      this.invoiceDate = invoiceData.invoiceDate;
      this.vendor = invoiceData.vendor;
      this.status = invoiceData.status;
      this.totalAmount = invoiceData.totalAmount;
      this.items = invoiceData.items;
    }
  }

  downloadPDF(): void {
    const doc = new jsPDF();

    // Add the invoice information to the PDF
    doc.setFontSize(20);
    doc.text(`Invoice #${this.invoiceNumber}`, 14, 22);
    doc.setFontSize(12);
    doc.text(`Date: ${this.invoiceDate}`, 14, 32);
    doc.text(`Vendor: ${this.vendor}`, 14, 42);
    doc.text(`Status: ${this.status}`, 14, 52);

    // Table header
    const startY = 62;
    doc.setFontSize(10);
    const headers = ['Description', 'Quantity', 'Unit Price', 'Total'];
    const widths = [90, 30, 30, 30];

    headers.forEach((header, index) => {
      doc.text(header, 14 + widths.slice(0, index).reduce((a, b) => a + b, 0), startY);
    });

    // Table rows (items)
    this.items.forEach((item, rowIndex) => {
      const yPosition = startY + (rowIndex + 1) * 10;
      doc.text(item.description, 14, yPosition);
      doc.text(item.quantity.toString(), 104, yPosition);
      doc.text(item.unitPrice.toFixed(2), 134, yPosition);
      doc.text(item.total.toFixed(2), 164, yPosition);
    });

    // Total amount row
    doc.text('Total', 14, startY + (this.items.length + 1) * 10);
    doc.text(this.totalAmount.toFixed(2), 164, startY + (this.items.length + 1) * 10);

    // Save the generated PDF
    doc.save(`Invoice_${this.invoiceNumber}.pdf`);
  }
}
