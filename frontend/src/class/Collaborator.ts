export default class Collaborator {
    constructor(readonly name: string, readonly daily: number) {
        if (!this.name) throw new Error("Nome deve ser informado"); 
        if (this.daily <= 0) throw new Error("A diária deve ser maior que 0"); 
    }
}
