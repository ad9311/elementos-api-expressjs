import type { Element } from '../../types.d.ts';

export function displayElementUnits(element: Element): Element {
  const atomicWeight = `${element.atomicWeight} u`;
  const density = element.density ? `${element.density} g/cm³` : null;
  const meltingPoint = element.meltingPoint ? `${element.meltingPoint} K` : null;
  const boilingPoint = element.boilingPoint ? `${element.boilingPoint} K` : null;

  return {...element, atomicWeight, density, meltingPoint, boilingPoint};
}

function displayCollectionUnits(elements: Element[]): Element[] {
  return elements.map(e => displayElementUnits(e));
}

export default displayCollectionUnits;
