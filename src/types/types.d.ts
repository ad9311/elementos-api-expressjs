// Element
export type ElementSeries =
  | 'nonmetal'
  | 'alkali_metal'
  | 'alkaline_earth_metal'
  | 'transition_metal'
  | 'post_transition_metal'
  | 'halogen'
  | 'noble_gas';

export type ElementState = 'solid' | 'liquid' | 'gas';

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
