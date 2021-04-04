import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import FruitRoutes from "./routes/FruitRoutes";

class App {
  public app: express.Application;
  //Declara todos os grupos de rotas:
  public fruitRoutes: FruitRoutes = new FruitRoutes();

  constructor() {
    this.app = express();
    this.config();
    //Carrega todos os grupos de rotas:
    this.fruitRoutes.routes(this.app);
    /*this.loginRoutes.routes(this.app, verifyJWT);
    this.postsRoutes.routes(this.app, verifyJWT);
    this.commentRoutes.routes(this.app, verifyJWT);
    this.notificationRules.routes(this.app, verifyJWT);*/
    //inicializa o banco de dados:
    //mongoose.connect(mongodbString, {useNewUrlParser: true});
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }
}

export default new App().app;