import express, { Response } from "express";
import router from "./routes";
import "reflect-metadata"
import { AppDataSource } from "./config/dataSource";

const app = express();
app.use(express.json());
router(app);

AppDataSource.initialize().then(() => {
    console.log("Conexão com o banco de dados estabelecida")
}).catch((error) => {
    console.log(error)
});

export default app;
