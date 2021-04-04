//require("dotenv-safe").config();
import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./App";


const port = process.env.PORT || 8888;
 
/* Inicia o servidor */
createConnection().then(() => 
  app.listen(port, async () => { 
    console.log('Server running on port ' + port); 
  })
)