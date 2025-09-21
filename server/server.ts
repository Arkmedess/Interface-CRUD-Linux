import express from 'express'
import { PrismaClient } from '@prisma/client';
import cors from 'cors'

const prisma = new PrismaClient();

const app = express();
app.use(express.json())
app.use(cors())

app.post('/usuarios', async (req, res) => //criar usuários c/ post
{
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    });

    //users.push(req.body); // Push: enviar dados do argumento para algum local
    res.status(201).json(req.body); // 201 = deu certo e  user || json para retornar o usuario criado
})

app.put('/usuarios/:id', async (req, res) => //editar usuários c/ put
{


    const updateuser = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    });

    res.status(201).json(updateuser); // 201 = deu certo e  user || json para retornar o usuario criado
})

app.get('/usuarios', async (req, res) =>
{
    const name = req.query.name;
    const users = await prisma.user.findMany({
        where: name 
            ? {name: Array.isArray(name)  // if de se é array
                ? name[0] // se for retorna o primeiro valor apenas
                : name 
            }
            : undefined
        });
        res.status(200).json(users); // 200 igual deu certo || json para retornar o usuario criado
    });
    


app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete ({
        where: {
            id: req.params.id
        },
    })
    
    res.status(200).json({Message: 'Usuário deletado com sucesso!'})
})

app.listen(3000, () => {
    console.log('Funcionou');
})