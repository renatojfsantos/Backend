const { response } = require('express');
const express = require('express');

const app = express();

/**
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 *      PUT:     QUANDO VAI ATUALIZAR TODO OS DADOS AO MESMO TEMPO
 *      PATCH:   QUANDO VAI ATULIZAR DADOS ESPECIFICOS
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Filtros e paginação
 * Routes Params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
 */

/**
 * Middleware:
 * 
 *   Interceptador de requisições que podem interrompter
 * totalmente a requisição ou alterar dados da requisição.
 */

app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3'
  ]);
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});
