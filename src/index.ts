import express from 'express';
const app = express();

app.use(express.json())
const port = process.env.PORT || 3000;

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Welcom mester osama elgendy ');
});

app.listen(port, () => {
  console.log(`[server]: Server is running   at http://localhost:${port}`);
});