import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Cria uma conexão com o banco de dados MongoDB usando a string de conexão fornecida pela variável de ambiente `STRING_CONEXAO`. O resultado da conexão é armazenado na variável `conexao`.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados.
export async function getTodosPosts() {
  const db = conexao.db("imersao-instabytes");
  // Obtém o banco de dados com o nome "imersao-instabytes" a partir da conexão estabelecida.
  const colecao = db.collection("posts");
  // Obtém a coleção "posts" dentro do banco de dados.
  return colecao.find().toArray();
  // Executa uma consulta para encontrar todos os documentos na coleção "posts" e retorna os resultados como um array.
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  const objId = ObjectId.createFromHexString(id)
  return colecao.updateOne({_id: new ObjectId(objId)}, {$set: novoPost});
}
