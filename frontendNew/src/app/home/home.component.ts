import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  imports: [RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  birthday = '';
  constructor(private router: Router) {}
  onSubmit() {
    if (this.birthday) {
      this.router.navigate(['/another-page'], {
        queryParams: { bday: this.birthday }
      });
    } else {
      alert('Bitte ein Geburtsdatum eingeben.');
    }
  }
}