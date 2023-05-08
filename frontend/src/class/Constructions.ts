export default class Constructions {
    constructor(readonly name: string, readonly serviceValue: number) {
        if (!this.name) throw new Error("Nome da construção deve ser informado"); 
        if (this.serviceValue <= 0) throw new Error("O valor do serviço deve ser maior que 0"); 
    }
}
