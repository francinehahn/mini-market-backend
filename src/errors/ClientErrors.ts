import { CustomError } from "./CustomError"


export class MissingName extends CustomError{
    constructor () {
        super(422, "Provide the client name.")
    }
}

export class MissingId extends CustomError{
    constructor () {
        super(422, "Provide the client id.")
    }
}

export class DuplicateName extends CustomError{
    constructor () {
        super(422, "Name already registered in the database.")
    }
}

export class ClientNotFound extends CustomError{
    constructor () {
        super(404, "Client not found.")
    }
}

