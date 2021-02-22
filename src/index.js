const { request, response } = require('express');
const express=require('express');
const app=express();

app.use(express.json());

/**
 * Métodos HTTP
 * 
 * Get:Buscar informações de back-end
 * POST: criar uma informação no back-end
 * PUT:Alterar informação no back-end
 * Delete:Deletar uma informação no back-end
 * 
 * TIpos de parametros
 * 
 * Querry Params:FIltros e paginação
 * Route params: Indentificar recursos(Atualizar/deletar)
 * Request body params: Conteudo na hora de criar ou editar um recurso (JSON)
 * 
 */

 const projects=[];
app.get('/projects', (request, response)=>{
    const {title,owner}= request.query;

    console.log(title);
    console.log(owner);
   return response.json([
       'Projeto 1',
       'Projeto 2',
    ]);
});

app.post('/projects',(request, response)=>{
    const{title,owner}=request.body;

    console.log(title,owner);
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.put('/projects/:id', (request, response)=>{

    const{id}=request.params;
    console.log(id);
    return response.json([
        'Projete 4',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.delete('/projects/:id', (request, response)=>{
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.listen(3333, ()=> {
    console.log('O pai ta on')
});