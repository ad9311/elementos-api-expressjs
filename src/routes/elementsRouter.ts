import express from 'express';
import data from '../services/element/elements.json' assert { type: 'json' };
import findElement from '../services/element/findElement.ts';
import type { FindElementBy, KeyFormat } from '../types.js';
import { formatCollectionKeysToSnakeCase } from '../helpers/formatObjectKeys.ts';

const router = express.Router();

router.get('/', (req, res) => {
  const keyFormat = req.query['key_format'] as KeyFormat;

  if (keyFormat === 'snake_case') {
    res.send({ elements: formatCollectionKeysToSnakeCase(data.elements) });
  } else {
    res.send({ elements: data.elements });
  }
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const findBy = req.query['find_by'];
  const element = findElement(id, findBy as FindElementBy);

  if (element) {
    res.send({ element });
  } else {
    res.sendStatus(404);
  }
});

export default router;
