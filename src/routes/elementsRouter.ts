import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send({ elements: [] });
});

router.get('/:element', (req, res) => {
  res.send({ element: req.params.element });
});

export default router;
