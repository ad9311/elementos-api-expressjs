// Element
export type ElementSeries =
  | 'Nonmetal'
  | 'Alkali Metal'
  | 'Alkaline Earth Metal'
  | 'Transition Metal'
  | 'Post Transition Metal'
  | 'Halogen'
  | 'Noble Gas';

export type ElementState = 'Solid' | 'Liquid' | 'Gas';

export type ElementDiscoveryYear = number | 'Ancient';

export interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicWeight: number;
  series: ElementSeries;
  seriesColor: string;
  description: string;
  state: ElementState;
  group: number | null;
  period: number;
  density: number | null;
  meltingPoint: number | null;
  boilingPoint: number | null;
  yearDiscovered: ElementDiscoveryYear;
  infoUrl: string;
}

// Query
export type FindElementBy = 'atomic_number' | 'symbol' | 'name';
