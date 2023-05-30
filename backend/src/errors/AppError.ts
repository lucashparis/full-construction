export class AppError extends Error {
    constructor(readonly message: string = 'Ops, Algo saiu como inesperado!', readonly statusCode: number = 500) {
        super(message);
        this.statusCode = statusCode;
    }
}