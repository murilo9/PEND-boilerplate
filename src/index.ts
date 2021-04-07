import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./App";


const port = process.env.PORT || 3000;
 
/* Starts the server */
createConnection().then(() => 
  app.listen(port, async () => { 
    console.log('Server running on port ' + port); 
  })
)