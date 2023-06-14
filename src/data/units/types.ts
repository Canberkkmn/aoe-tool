export interface GameData {
  units: Unit[];
}

export interface Unit {
  id: number;
  name: string;
  description: string;
  expansion: Expansion;
  age: Age | string;
  cost: Cost | null;
  buildTime?: number;
  reloadTime?: number;
  attackDelay?: number;
  movementRate?: number;
  lineOfSight: number;
  hitPoints: number;
  range?: number | string;
  attack?: number;
  armor: string;
  accuracy?: string;
  attackBonus?: string[];
  searchRadius?: number;
  blastRadius?: number;
  armorBonus?: string[];
}

export enum Age {
  All = "All",
  Castle = "Castle",
  Dark = "Dark",
  Feudal = "Feudal",
  Imperial = "Imperial",
}

export interface Cost {
  Wood?: number;
  Gold?: number;
  Food?: number;
}

export enum Expansion {
  AgeOfKings = "Age of Kings",
  TheConquerors = "The Conquerors",
}
