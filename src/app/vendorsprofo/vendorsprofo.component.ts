import { Component } from '@angular/core';

@Component({
  selector: 'app-vendorsprofo',
  templateUrl: './vendorsprofo.component.html',
  styleUrls: ['./vendorsprofo.component.css']
})
export class VendorsprofoComponent {
  loadFile(event: any) {
    const image = document.getElementById('profileImage') as HTMLImageElement;
    image.src = URL.createObjectURL(event.target.files[0]);
  }

}
