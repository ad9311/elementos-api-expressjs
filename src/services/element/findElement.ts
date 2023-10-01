import type { Element, FindElementBy } from '../../types.d.ts';
import data from './elements.json' assert { type: 'json' };

const elementData = data.elements as Element[];

export function findElementByAtomicNumber(atomicNumber: number) {
  return elementData.find(e => e.atomicNumber === atomicNumber);
}

export function findElementBySymbol(symbol: string) {
  return elementData.find(e => e.symbol === symbol);
}

export function findElementByName(name: string) {
  return elementData.find(e => e.name === name);
}

function findElement(id: string, findBy: FindElementBy) {
  switch (findBy) {
  case 'atomic_number':
    return findElementByAtomicNumber(+id);
  case 'symbol':
    return findElementBySymbol(id);
  case 'name':
    return findElementByName(id);
  default:
    return undefined;
  }
}

export default findElement;
