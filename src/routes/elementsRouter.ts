import express from 'express';
import data from '../services/element/elements.json' assert { type: 'json' };
import findElement from '../services/element/findElement.ts';
import type { FindElementBy } from '../types.d.ts';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send({ elements: data.elements });
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
