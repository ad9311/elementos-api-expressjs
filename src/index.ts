import dotenv from 'dotenv';
import express from 'express';
import elementsRouter from './routes/elementsRouter.ts';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (_req, res) => {
  res.send({ message: 'Elementos API' });
});

app.use('/elements', elementsRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
