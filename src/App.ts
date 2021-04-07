import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import FruitRoutes from './routes/FruitRoutes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    // Initialize routes groups:
    // TODO: add all routing classes to index.ts array
    // TODO: make all routing classes inherit from generic routing class
    FruitRoutes.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }
}

export default new App().app;
