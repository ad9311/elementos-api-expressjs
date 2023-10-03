import type { ObjectStringKey } from '../types.d.ts';

export function formatObjectKeysToSnakeCase(obj: unknown) {
  return Object.keys(obj as ObjectStringKey).reduce((acc, key) => {
    (acc as ObjectStringKey)[key.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`)] = (obj as ObjectStringKey)[key];
    return acc;
  }, {});
}

export function formatCollectionKeysToSnakeCase(collection: unknown[]) {
  return collection.reduce((acc: unknown[], obj: unknown) => {
    acc.push(formatObjectKeysToSnakeCase(obj));
    return acc;
  }, [] as unknown[]);
}
