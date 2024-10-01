import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  proposals: any[] = [];

  ngOnInit() {
    const storedProposals = localStorage.getItem('proposals');
    if (storedProposals) {
      this.proposals = JSON.parse(storedProposals);
    }
  }
}

