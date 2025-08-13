import { Component } from '@angular/core';
import { MutationService } from '../../services/MutationService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mutations-stats',
  imports: [CommonModule],
  templateUrl: './mutations-stats.html',
  styleUrl: './mutations-stats.css',
})
export class MutationsStats {
  stats: {
    count_mutations: number;
    count_no_mutation: number;
    ratio: number;
  } | null = null;

  constructor(private mutationService: MutationService) {
    this.loadMutations();
  }

  async loadMutations() {
    try {
      this.stats = await this.mutationService.getMutationsStats();
      console.log(this.stats);
    } catch (error) {
      console.error('[ERROR Mutations Component: loadMutations]', error);
    }
  }
}
