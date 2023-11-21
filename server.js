import  express  from "express";
import dotenv from "dotenv";
const app = express();
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import database from "./database.js";

// Get the directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: `${__dirname}/.env` });
const port = process.env.PORT;

database();

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    // console.log(`Server started at ${host}:${port}/api/${api_version}/`);
});
  
export default app;