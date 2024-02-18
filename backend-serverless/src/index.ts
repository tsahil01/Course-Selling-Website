import { Hono } from 'hono';
import cors from 'cors';
import { bodyParser } from "body-parser";

const app = new Hono();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (c) => c.text('Hono!'))

export default app