import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "A" },
      { id: 12, name: "B" },
      { id: 13, name: "C" },
      { id: 14, name: "D" },
      { id: 15, name: "E" },
      { id: 16, name: "F" },
      { id: 17, name: "G" },
      { id: 18, name: "H" },
      { id: 19, name: "I" },
      { id: 20, name: "J" }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
