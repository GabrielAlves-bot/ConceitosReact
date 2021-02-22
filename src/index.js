const { request, response } = require('express');
const express=require('express');
const{ uuid }=require('uuidv4');
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
    // const {title,owner}= request.query;

    // console.log(title);
    // console.log(owner);
   return response.json(projects);
});

app.post('/projects',(request, response)=>{
    const{title,owner}=request.body;

    const project={id: uuid(),title,owner};
    projects.push(project);

    console.log(title,owner);
    return response.json(project);
});
app.put('/projects/:id', (request, response)=>{
    const{id}=request.params;
    const{title,owner}= request.body;

    const projectIndex=projects.findIndex(project => project.id ===id);

    if(projectIndex<0){
        return response.status(400).json({error:'Project not found'});
    };

    const project={
        id,
        title,
        owner,
    };

    projects[projectIndex]= project;

    console.log(id);
    return response.json(project)
});

app.delete('/projects/:id', (request, response)=>{

    const{id}=request.body;

    const projectIndex=projects.findIndex(project => projects.id===id);

    if(projectIndex<0){
        return response.status(400).json({erro:'Project not found'});
    }

    projects.splice(projectIndex,1);


    return response.status(204).send();
});

app.listen(3333, ()=> {
    console.log('O pai ta on')
});