export class Animal{

    private nome: string;
    private idade: number;
    private genero: string;

    constructor(_nome: string,
                _idade: number,
                _genero: string){
            this.nome = _nome;
            this.idade = _idade;
            this.genero = _genero;
        }

public getNome(nome: string) {
    return this.nome;
}
    
public setNome(_nome: string): void{
    this.nome = _nome;
}
    
public getIdade(): number {
    return this.idade;
}
    
public setIdade(_idade: number): void {
    this.idade = _idade;
}

public getGenero(): string {
    return this.genero;
}
    
public setGenero(_genero: string): void{
    this.genero = _genero;
}

}