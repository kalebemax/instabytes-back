import express from "express";
// Importa o framework Express, que é a base para criar aplicações web Node.js.

import routes from "./src/routes/postRoutes.js";

const posts = [
  // Array que simula um banco de dados local, contendo objetos que representam posts.
  {
    id: 1,
    descricao: "uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "gato fazendo yoga",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "gato fazendo paqueca",
    imagem: "https://placecats.com/millie/300/150",
  },
];

// Cria uma instância do Express, que será o ponto de partida para a sua aplicação.
const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor Express na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto para receber requisições.
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
