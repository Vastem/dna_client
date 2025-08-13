import { Component } from '@angular/core';
import { MutationService } from '../../services/MutationService';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-mutations-list',
  imports: [CommonModule, DatePipe],
  templateUrl: './mutations-list.html',
  styleUrl: './mutations-list.css',
})
export class MutationsList {
  mutations: any[] = [];

  constructor(private mutationService: MutationService) {
    this.loadMutations();
  }

  async loadMutations() {
    try {
      this.mutations = await this.mutationService.getMutationsList();
      console.log(this.mutations);
    } catch (error) {
      console.error('[ERROR Mutations Component: loadMutations]', error);
    }
  }
}
