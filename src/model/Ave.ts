import {Animal} from "./Animal";

export class Ave extends Animal{
    private envergadura: number;

    constructor(_envergadura:number,
                _nome:string,
                _idade:number,
                _genero:string){
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }

public getEnvergadura(envergadura: number) {
    return this.envergadura;
}
        
public setEnvergadura(_envergadura: number): void{
    this.envergadura = _envergadura;
}
        

}