import {Animal} from "./Animal";

class Ave extends Animal{
    private envergadura: string;

    constructor(_envergadura:string,
                _nome:string,
                _idade:number,
                _genero:string){
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }

public getEnvergadura(envergadura: string) {
    return this.envergadura;
}
        
public setEnvergadura(_envergadura: string): void{
    this.envergadura = _envergadura;
}
        

}