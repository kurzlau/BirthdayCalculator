import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthdayService } from '../services/birthday.service';
import { ActivatedRoute, RouterModule, Params } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-another-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.css']
})
export class AnotherPageComponent implements OnInit {
  values: any[] = [];
  isLoading = false;
  error: string | null = null;
  birthdayValue = '';

  // ActivatedRoute korrekt per Konstruktor injizieren
  constructor(
    private birthdayService: BirthdayService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      console.log('📦 Query-Parameter:', params); // <--- HIER
      const birthday = params['bday'];
      if (birthday) {
        this.birthdayValue = birthday;
        this.loadBirthdayData(birthday);
      } else {
        console.warn('⚠️ Kein Geburtstag übergeben.');
      }
    });
  }
  

  async loadBirthdayData(birthday: string): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      const data = await this.birthdayService.fetchBirthdayData(birthday);
      this.values = [data];
    } catch (err) {
      this.error = 'Failed to load birthday data.';
      console.error(err);
    } finally {
      this.isLoading = false;
    }
  }
}
