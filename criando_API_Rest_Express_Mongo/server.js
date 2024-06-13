import http from "http";

const PORT = 3000;
const rotas = {
    "/" : "Curso de nodeJs",
    "/livros" : "Livros disponíveis",
    "/autores" : "Autores disponíveis",
    "/sobre" : "Sobre o curso",
}
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url] || "Rota não encontrada");
});

server.listen(PORT, () => {
  console.log("Servidor rodando na porta 3000");
});

