import type { ObjectStringKey } from '../types.d.ts';

export function formatObjectKeysToSnakeCase(obj: ObjectStringKey) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`)] = obj[key];
    return acc;
  }, {} as ObjectStringKey);
}

export function formatCollectionKeysToSnakeCase(collection: ObjectStringKey[]) {
  return collection.reduce((acc, obj: ObjectStringKey) => {
    acc.push(formatObjectKeysToSnakeCase(obj));
    return acc;
  }, [] as ObjectStringKey[]);
}
