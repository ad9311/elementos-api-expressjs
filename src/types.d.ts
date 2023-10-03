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
  atomicWeight: number | string;
  series: ElementSeries;
  seriesColor: string;
  description: string;
  state: ElementState;
  group: number | null;
  period: number;
  density: number | string | null;
  meltingPoint: number | string | null;
  boilingPoint: number | string | null;
  yearDiscovered: ElementDiscoveryYear;
  infoUrl: string;
}

// Query
export type FindElementBy = 'atomic_number' | 'symbol' | 'name';
export type KeyFormat = 'camel_case' | 'snake_case' | undefined;
export type displayUnits = '0' | '1' | undefined;

// Helpers
export type ObjectStringKey = {
  [key: string]: unknown;
};
