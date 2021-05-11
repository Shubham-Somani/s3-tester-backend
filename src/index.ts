import * as express from 'express';
import * as routes from './routes';
import * as cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

routes.register(app);

app.listen(port, () => {
  console.log('server started at -->', port)
})