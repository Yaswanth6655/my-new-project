import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {
  
  
  loadFile(event: any) {
    const image = document.getElementById('profileImage') as HTMLImageElement;
    image.src = URL.createObjectURL(event.target.files[0]);
  }

}

