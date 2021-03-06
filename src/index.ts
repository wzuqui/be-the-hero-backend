import * as express from 'express';
import * as cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;
console.log(PORT);
app.listen(PORT);
