import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import findRoute from './routes/findRoute.js'

const app = express()
dotenv.config();

const port = process.env.port || 3000;

app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded());
app.use (cookieParser());
app.use(cors());

app.use('/api/find', findRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})