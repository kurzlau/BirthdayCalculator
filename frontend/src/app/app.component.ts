import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { RouterOutlet } from '@angular/router';

/** @title Basic datepicker */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [provideNativeDateAdapter()],
  imports: [
    RouterOutlet,           // Beibehaltung des RouterOutlet für Navigation
    MatFormFieldModule,     // Material FormField Modul
    MatInputModule,         // Material Input Modul
    MatDatepickerModule     // Material Datepicker Modul
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'frontend';
}
