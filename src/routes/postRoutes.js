import express from "express"; // Importa o framework Express para criar a aplicação web
import multer from "multer"; // Importa o Multer para lidar com uploads de arquivos
import cors from "cors";
import {
  atualizarNovoPost,
  listarPosts,
  postarNovoPost,
  uploadImagem,
} from "../controllers/postController.js"; // Importa as funções controladoras para lidar com a lógica dos posts

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSucessStatus: 200,
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Define as rotas usando o objeto Express app
const routes = (app) => {
  // Permite que o servidor interprete corpos de requisições no formato JSON
  app.use(express.json());
  app.use(cors(corsOptions));
  // Rota para recuperar uma lista de todos os posts
  app.get("/posts", listarPosts); // Chama a função controladora apropriada

  // Rota para criar um novo post
  app.post("/posts", postarNovoPost); // Chama a função controladora para criação de posts

  // Rota para upload de imagens (assumindo uma única imagem chamada "imagem")
  app.post("/upload", upload.single("imagem"), uploadImagem); // Chama a função controladora para processamento da imagem

  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
