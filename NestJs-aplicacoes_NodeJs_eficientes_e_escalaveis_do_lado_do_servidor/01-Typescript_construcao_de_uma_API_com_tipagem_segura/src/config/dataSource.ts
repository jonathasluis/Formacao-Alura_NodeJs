import { DataSource } from "typeorm";
import PetEntity from "../entities/PetEntity";
import AdotanteEntity from "../entities/AdotanteEntity";
import Endereco from "../entities/Endereco";
import AbrigoEntity from "../entities/AbrigoEntity";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/config/database.sqlite",
    entities: [PetEntity, AdotanteEntity, Endereco, AbrigoEntity],
    synchronize: true,
});