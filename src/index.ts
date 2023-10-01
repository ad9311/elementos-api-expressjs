
import express from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (_req, res) => {
  res.send({ message: 'Hello world!' });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
