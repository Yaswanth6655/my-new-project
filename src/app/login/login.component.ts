import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  role: string = '';
  error: string = '';
  output: string = '';

  // Fetch users from localStorage
  getUsers() {
    return JSON.parse(localStorage.getItem('suppliers') || '[]');
  }

  onSubmit() {
    // Ensure role is selected
    if (!this.role) {
      this.error = 'Please select a role.';
      return;
    }

    // Get the list of registered users (suppliers)
    const users = this.getUsers();

    // Check if the entered credentials match any user in localStorage
    const user = users.find(
      (u: any) => u.email === this.email && u.password === this.password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      // Assuming role 'vendor' for suppliers (or adjust role check if applicable)
      if (this.role === 'vendor') {
        this.output = 'Redirecting to Vendor Dashboard...';
        setTimeout(() => {
          window.location.href = '/vendor';
        }, 1000);
      } else if (this.role === 'customer') {
        this.output = 'Redirecting to Customer Dashboard...';
        setTimeout(() => {
          window.location.href = '/customer';
        }, 1000);
      }
    } else {
      this.error = 'Invalid email, password, or role. Please try again.';
    }
  }
}
