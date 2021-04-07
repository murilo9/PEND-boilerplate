import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import FruitRoutes from "./routes/FruitRoutes";

class App {
  public app: express.Application;
  //Declares all routes groups:
  public fruitRoutes: FruitRoutes = new FruitRoutes();

  constructor() {
    this.app = express();
    this.config();
    //Loads all routes groups:
    this.fruitRoutes.routes(this.app);
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }
}

export default new App().app;