import { Component } from '@angular/core';

@Component({
  selector: 'app-request-for-proposal',
  templateUrl: './request-for-proposal.component.html',
  styleUrls: ['./request-for-proposal.component.css']
})
export class RequestForProposalComponent {
  quoteEndDate: string = '2022-06-20';
  needByDate: string = '2022-06-20';
  billingAddress: string = '3590 Hoffman Avenue, New York, NY 10013';
  shippingAddress: string = '2159 Bungalow Road';
  selectedVendor: string = 'ALL';
  productLines = [
    { itemName: 'Laptop', quantity: 500, uom: 'Each', price: 450, needByDate: '2022-06-23' }
  ];

  constructor() {
    this.loadStoredProposals();  // Load previously stored proposals
  }

  calculateTotalAmount(): number {
    return this.productLines.reduce((total, product) => total + (product.quantity * product.price), 0);
  }

  submitProposal() {
    // Prepare proposal data
    const proposalData = {
      quoteEndDate: this.quoteEndDate,
      needByDate: this.needByDate,
      billingAddress: this.billingAddress,
      shippingAddress: this.shippingAddress,
      selectedVendor: this.selectedVendor,
      productLines: this.productLines,
      totalAmount: this.calculateTotalAmount()
    };

    // Save the proposal data to localStorage
    const storedProposals = JSON.parse(localStorage.getItem('proposals') || '[]');
    storedProposals.push(proposalData);
    localStorage.setItem('proposals', JSON.stringify(storedProposals));

    alert('Proposal submitted successfully!');
    console.log('Proposal submitted', proposalData);
  }

  cancelProposal() {
    console.log('Proposal canceled');
  }

  removeProductLine(index: number) {
    this.productLines.splice(index, 1);
  }

  loadStoredProposals() {
    const storedProposals = localStorage.getItem('proposals');
    if (storedProposals) {
      console.log('Loaded proposals from localStorage:', JSON.parse(storedProposals));
    }
  }
}
