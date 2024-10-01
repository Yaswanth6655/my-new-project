import { Component, OnInit } from '@angular/core';

// Define the Contract interface directly in the component
interface Contract {
  id: number;
  contractNumber: string;
  supplierName: string;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Expiring Soon' | 'Expired';
}

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  contracts: Contract[] = []; 

  ngOnInit(): void {
    this.loadContracts();
  }

  loadContracts(): void {
    
    this.contracts = [
      {
        id: 1,
        contractNumber: 'CON20240901',
        supplierName: 'ABC Industries',
        startDate: '2023-01-01',
        endDate: '2024-12-31',
        status: 'Active'
      },
      {
        id: 2,
        contractNumber: 'CON20230515',
        supplierName: 'XYZ Corp',
        startDate: '2023-05-15',
        endDate: '2024-05-15',
        status: 'Expiring Soon'
      },
      {
        id: 3,
        contractNumber: 'CON20220322',
        supplierName: 'DEF Solutions',
        startDate: '2022-03-22',
        endDate: '2024-03-22',
        status: 'Expired'
      }
    ];
  }

  handleAction(action: string, contract: Contract): void {
    
    if (action === 'view') {
      console.log(`Viewing contract ${contract.contractNumber}`);
    } else if (action === 'renew') {
      console.log(`Renewing contract ${contract.contractNumber}`);
    } else if (action === 'terminate') {
      console.log(`Terminating contract ${contract.contractNumber}`);
    }
  }
}
