import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';

const port = 3000;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave(10, 'Papaguaio', 30 , 'masculino');
    let reptil: Reptil = new Reptil('Cicloides', 'Lagarto', 30 , 'masculino');
    let mamifero: Mamifero = new Mamifero('Doberman','cachorro', 102 , 'femea');
    res.json([ave, reptil,mamifero]);
})

server.post('/ave', (req,res) => {
    const{nome,idade,genero, envergaura} = req.body;
    let ave: Ave = new Ave(envergaura, nome, idade , genero);
    res.json(["A nova ave do zoológico é:", ave]);
});

server.listen(port, () => {
    console.log(`Servidor está executando no endereço http:/localhost:${port}`);
})
