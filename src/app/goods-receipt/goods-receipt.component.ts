import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-goods-receipt',
  templateUrl: './goods-receipt.component.html',
  styleUrls: ['./goods-receipt.component.css']
})
export class GoodsReceiptComponent implements OnInit {
  
  receiptNumber: string = 'GRN-20240926-001';
  dateReceived: string = '26-Sep-2024';
  supplierName: string = 'ABC Manufacturing';
  warehouseLocation: string = 'Warehouse #3, Main Distribution Center';

  
  itemsReceived = [
    {
      itemCode: 'ITM001',
      itemName: 'Steel Rod',
      quantityReceived: 500,
      unitPrice: 10.00,
      totalPrice: 5000.00,
      comments: 'Delivered in good condition'
    },
    {
      itemCode: 'ITM002',
      itemName: 'Bolts',
      quantityReceived: 1000,
      unitPrice: 0.50,
      totalPrice: 500.00,
      comments: 'Package damaged, but items intact'
    },
    {
      itemCode: 'ITM003',
      itemName: 'Industrial Oil',
      quantityReceived: 200,
      unitPrice: 20.00,
      totalPrice: 4000.00,
      comments: 'No issues'
    }
  ];

  
  receiptStatus: string = 'Completed';

  constructor() {}

  ngOnInit(): void {
    
  }

  
  downloadPDF(): void {
    const doc = new jsPDF();

    
    doc.setFontSize(18);
    doc.text('Goods Receipt', 14, 20);

    
    doc.setFontSize(12);
    doc.text(`Receipt Number: ${this.receiptNumber}`, 14, 30);
    doc.text(`Date Received: ${this.dateReceived}`, 14, 35);
    doc.text(`Supplier Name: ${this.supplierName}`, 14, 40);
    doc.text(`Warehouse Location: ${this.warehouseLocation}`, 14, 45);
    doc.text(`Receipt Status: ${this.receiptStatus}`, 14, 50);

    
    doc.text('', 14, 60);

    
    autoTable(doc, {
      startY: 70,
      head: [['Item Code', 'Item Name', 'Quantity Received', 'Unit Price', 'Total Price', 'Comments']],
      body: this.itemsReceived.map(item => [
        item.itemCode,
        item.itemName,
        item.quantityReceived,
        item.unitPrice.toFixed(2),
        item.totalPrice.toFixed(2),
        item.comments
      ]),
    });

    
    doc.save('goods-receipt.pdf');
  }
}
