import { Injectable } from '@angular/core';

const BASE_URL = 'https://dna-production.up.railway.app/api/mutation';

@Injectable({
  providedIn: 'root',
})
export class MutationService {
  async getMutationsStats(): Promise<any> {
    try {
      const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('[ERROR MUTATION SERVICE: getMutations]', error);
      throw error;
    }
  }

  async getMutationsList(): Promise<any> {
    try {
      const response = await fetch(`${BASE_URL}/list`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('[ERROR MUTATION SERVICE: getMutations]', error);
      throw error;
    }
  }
}
