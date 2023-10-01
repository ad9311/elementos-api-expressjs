
import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', (_req, res) => {
  res.send({ message: 'Hello world!' });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
