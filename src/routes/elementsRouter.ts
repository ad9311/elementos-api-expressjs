import express from 'express';
import data from '../services/element/elements.json' assert { type: 'json' };
import findElement from '../services/element/findElement.ts';
import type { Element, FindElementBy, KeyFormat, displayUnits } from '../types.d.ts';
import displayCollectionUnits, { displayElementUnits } from '../services/element/displayUnits.ts';
import { formatCollectionKeysToSnakeCase, formatObjectKeysToSnakeCase } from '../helpers/formatObjectKeys.ts';

const router = express.Router();

router.get('/', (req, res) => {
  let elements = data.elements as Element[];

  const displayUnits = req.query['display_units'] as displayUnits;
  if (displayUnits === '1') {
    elements = displayCollectionUnits(elements);
  }

  const KeyFormat = req.query['key_format'] as KeyFormat;
  if (KeyFormat === 'snake_case') {
    elements = formatCollectionKeysToSnakeCase(elements) as Element[];
  }

  res.send({ elements: elements });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const findBy = req.query['find_by'];
  let element = findElement(id, findBy as FindElementBy);

  if (element) {
    const displayUnits = req.query['display_units'] as displayUnits;
    if (displayUnits === '1') {
      element = displayElementUnits(element);
    }

    const KeyFormat = req.query['key_format'] as KeyFormat;
    if (KeyFormat === 'snake_case') {
      element = formatObjectKeysToSnakeCase(element) as Element;
    }

    res.send({ element });
  } else {
    res.sendStatus(404);
  }
});

export default router;
