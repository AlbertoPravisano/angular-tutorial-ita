import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

export interface Hero {}

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [];
  constructor(private logger: Logger) {}
  async getHeroes() {
    // Fetch
    // this.heroes = await Promise.resolve({data: []});
    // Log
    this.logger.log(`Fetched ${this.heroes.length} heroes.`);
    return this.heroes;
  }
}
