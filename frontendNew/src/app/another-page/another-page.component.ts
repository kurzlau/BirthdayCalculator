import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-another-page',
  imports: [CommonModule], // <-- HIER CommonModule importieren
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.css']
})
export class AnotherPageComponent {
  values = [
    {
      age_in_years: 25,
      age_in_days: 9125,
      age_in_months: 300,
      days_since_last_birthday: 130,
      days_until_next_birthday: 235,
      get_zodiac: 'Löwe'
    },
    {
      age_in_years: 30,
      age_in_days: 10950,
      age_in_months: 360,
      days_since_last_birthday: 200,
      days_until_next_birthday: 165,
      get_zodiac: 'Zwilling',
    }
  ];
}
