import Cors from 'cors';
import { axiosInstance } from '../../axios';
import initMiddleware from '../../lib/init-middleware';

const cors = initMiddleware(
  Cors({
    origin: '*',
    allowedHeaders: ['Content-Type'],
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH']
  })
);

export default async function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  await cors(req, res);
  res.json({ message: 'Hello from cloudmall' });
  req.post(axiosInstance
    .post('/app/landing')
    .then(result => result.data)
    .then(result => res.json(result))
    .then(result => console.log('result', result))
    .catch(err => res.json(err));
  )
}
