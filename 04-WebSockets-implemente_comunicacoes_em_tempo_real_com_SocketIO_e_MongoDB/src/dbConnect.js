import e from "express";
import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://admin:admin@aluracluster.la7fayf.mongodb.net/?retryWrites=true&w=majority&appName=AluraCluster");
let documentoColecao;

try {
    await cliente.connect();
    const db = cliente.db("alura-webSockets");
    documentoColecao = db.collection("documentos");
    console.log("Conectado ao banco de dados");
} catch (error)  {
    console.log(error);
}

export { documentoColecao };
