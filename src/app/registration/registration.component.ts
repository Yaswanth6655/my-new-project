import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  companyName: string = '';
  contactName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zip: string = '';
  taxId: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: string = ''; // New field for role selection
  isSubmitting: boolean = false; // Track submission state

  roles = ['vendor', 'customer']; // Define available roles

  constructor(private router: Router) {} // Inject Router

  onSubmit() {
    // Validate password and confirm password
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Validate role selection
    if (!this.role) {
      alert('Please select a role.');
      return;
    }

    // Prepare supplier data including the role
    const supplierData = {
      companyName: this.companyName,
      contactName: this.contactName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip,
      taxId: this.taxId,
      password: this.password,
      role: this.role, // Add the role to supplier data
    };

    console.log('Supplier Data:', supplierData);

    this.isSubmitting = true; // Set submitting state to true

    // Simulate saving data to localStorage (acting as a static database)
    const suppliers = JSON.parse(localStorage.getItem('suppliers') || '[]');
    suppliers.push(supplierData);
    localStorage.setItem('suppliers', JSON.stringify(suppliers));

    alert('Registration successful!'); // Consider using a more user-friendly notification
    this.resetForm();
    this.router.navigate(['/login']); // Redirect after successful registration

    this.isSubmitting = false; // Reset submit state
  }

  resetForm() {
    this.companyName = '';
    this.contactName = '';
    this.email = '';
    this.phone = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zip = '';
    this.taxId = '';
    this.password = '';
    this.confirmPassword = '';
    this.role = ''; // Reset role
    this.isSubmitting = false; // Reset the submit state
  }
}
