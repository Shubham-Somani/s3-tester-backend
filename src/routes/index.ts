import * as express from 'express';
import { apiRouter } from './api'
const apiv1 = '/api/v1'

export const register = ( app: express.Application ) => {

    // API Routes
    app.use(`${apiv1}/`, apiRouter);
    // define a route handler for the default home page
    app.get('/', (req, res) => {
      res.send('Nothing is here');
    });
};