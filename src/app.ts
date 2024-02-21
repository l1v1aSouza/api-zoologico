import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico} from './model/Zoologico';
import { DatabaseModel } from './model/DatabaseModel';

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

server.post('/habitat', (req,res) => {
    const{nome, animais} = req.body; 
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado');
});

server.post('/atracao', (req,res) => {
    const{nome, habitat} = req.body; 
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criada');
});

server.post('/zoologico', (req,res) => {
    const{nome, atracao} = req.body; 
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoológico criado');
});

server.get('/reptil', async (req, res) => {
    const repteis = await Reptil.listarRepteis();

    res.status(200).json(repteis);
})

new DatabaseModel().testeConexao().then((resbd) => {
    if(resbd) {
        server.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        })
    } else {
        console.log('Não foi possível conectar ao banco de dados');
    }
})