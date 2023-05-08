import Collaborator from "../class/Collaborator";

describe('Teste para preenchimento de campos', () => {

    test("Deve conseguir cadastrar um funcionario (Nome e Diária)", function () {
        const collaborator = new Collaborator("Lucas Paris", 100);
        expect(collaborator.name).toBe("Lucas Paris");
        expect(collaborator.daily).toBe(100);
    });

    test("Não deve permitir o cadastrado de um funcionario sem nome", function () {
        expect(() => new Collaborator("", 0)).toThrow(new Error("Nome deve ser informado"));
    });

    test("Não deve permitir o cadastrado de um funcionario com a diária menor ou igual a 0", function () {
        expect(() => new Collaborator("Lucas Paris", 0)).toThrow(new Error("A diária deve ser maior que 0"));
    });
    
});

