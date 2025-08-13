import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mutations } from './components/mutations/mutations';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mutations, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Mutaciones';
}
