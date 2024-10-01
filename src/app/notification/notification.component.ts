import { Component } from '@angular/core';

interface Notification {
  id: number;
  type: string;
  message: string;
  date: string;
  status: string;
  action: string;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  notifications: Notification[] = [
    { id: 1, type: 'New PO Received', message: 'You have received a new Purchase Order from ABC Industries.', date: '2024-09-25', status: 'Acknowledged', action: 'View' },
    { id: 2, type: 'Contract Expiry', message: 'Your contract with XYZ Corp is expiring in 30 days.', date: '2024-09-20', status: 'Pending', action: 'Renew' },
    { id: 3, type: 'Invoice Overdue', message: 'Invoice INV12345 is overdue by 15 days.', date: '2024-09-18', status: 'Overdue', action: 'Pay Now' }
  ];

  performAction(action: string) {
    alert(`Action: ${action} triggered`);
  }
}
