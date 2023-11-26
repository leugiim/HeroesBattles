import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import routes from './routes';

const app = express();
app.use(morgan('dev'));
const port = process.env.PORT || 3000;

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});