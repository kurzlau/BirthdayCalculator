import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BirthdayService {
  private apiUrl = 'http://localhost:8080/bday'; 

  async fetchBirthdayData(birthday: string): Promise<any> {
    const url = `http://localhost:8080/bday?bday=${encodeURIComponent(birthday)}`;
    console.log('📤 Sende GET an:', url);
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Daten vom Backend:', data);
      return data;
    } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
      throw error;
    }
  }
}  
  